import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Col, Row, Button, Container, Card } from "react-bootstrap";
import { MenuService } from "../../services/Menu";
import * as Icon from "react-bootstrap-icons";
import { PaymentModal } from "./Payment";
import { ListProductPayment } from "./ListProduct";
import Style from "../../Style.module.css"

export default class MenuPage extends React.Component {
  constructor() {
    super();
    this.state = {
      meja: ["1", "2", "3", "4", "5", "6"],
      pilihan: 0,
      listMenu: [],
      quantity: 0,
      quantitys: 0,
      show: false,
      showList: false,
      modePayment: "",
      payMoney: 0,
      listMenuPayment: [],
      updateDataPayment: [],
    };
  }
  componentDidMount() {
    localStorage.setItem("Meja", 0);
    this.getAllMenu();
    localStorage.setItem("akses", "pelanggan");
  }

  pilihMeja = (nomor) => {
    localStorage.setItem("Meja", nomor);
    this.setState({
      pilihan: nomor,
    });
  };

  getAllMenu = async () => {
    const response = await MenuService.getAllMenu();
    if (response.success) {
      this.setState({
        listMenu: response.data,
      });
    }
    console.log(response.data);
  };

  handleTambahKeranjang = (data, index) => {
    var { listMenu, listMenuPayment } = this.state;

    var insertQty = { ...data, quantity: 1, product: 1 };
    listMenu[index] = insertQty;

    this.setState({
      listMenu: listMenu,
      //BELUM KELAR, HARUS BISA MENAMPILKAN INFORMASI TERKAIT BARANG BELANJAAN
      listMenuPayment: [...listMenuPayment, listMenu[index]],
    });
  };

  handleTambahQuantity = (index) => {
    const { listMenu } = this.state;

    const quantitys = listMenu[index].quantity;
    const addQuantity = quantitys + 1;

    var updateData = [...this.state.listMenu];
    updateData[index] = { ...updateData[index], quantity: addQuantity };

    this.setState({
      listMenu: updateData,
      
    });

    // console.log("index", quantitys);
  };

  handleKurangQuantity = (index) => {
    const { listMenu } = this.state;
    const quantitys = listMenu[index].quantity;
    const products = listMenu[index].product;

    const addQuantity = quantitys - 1;

    if (addQuantity == 0) {
      var addProducts = 0;
    } else if (quantitys > 0) {
      addProducts = products;
    }

    var updateData = [...this.state.listMenu];
    updateData[index] = {
      ...updateData[index],
      quantity: addQuantity,
      product: addProducts,
    };

    console.log("prdct", products);

    this.setState({
      listMenu: updateData,
    });
  };

  handleTambahProduct = (item) => {
    // var { hasilCari } = this.state;

    if (item.product == undefined) {
      item.product = 0;
    }

    return Number(item.product);
  };

  grandTotalProduct = () => {
    var { listMenu } = this.state;

    var grandTotalProduct = listMenu.reduce(
      (total, item) => total + Number(this.handleTambahProduct(item)),
      0
    );

    // localStorage.setItem("Jumlah Produk", grandTotalProduct)

    return grandTotalProduct;
  };

  calculateTotal = (item) => {
    // console.log("q", item.quantity);
    // console.log(item.price_max);

    if (item.quantity == undefined) {
      item.quantity = 0;
    }
    return Number(item.harga) * Number(item.quantity);
  };

  grandTotal = () => {
    var { listMenu } = this.state;

    var grandTotal = listMenu.reduce(
      (total, item) => total + Number(this.calculateTotal(item)),
      0
    );

    // localStorage.setItem("Estimasi Harga", grandTotal);
    return grandTotal;
  };

  openListPayment = () => {
    this.setState({
      showList: true,
    });
  };
  closeListPayment = () => {
    this.setState({
      showList: false,
    });
  };

  openPaymentModal = () => {
    this.setState({
      show: true,
    });
  };

  handleChangeMoney = (event) => {
    this.setState({
      payMoney: Number(event.target.value),
    });
  };

  closePaymentModal = () => {
    this.setState({
      show: false,
    });
  };

  orderPayments = () => {
    const { payMoney } = this.state;

    if (payMoney === 0) {
      alert("masukkan uang anda");
    } else if (payMoney < this.grandTotal()) {
      alert("uang anda kurang");
    } else {
      this.setState({
        modePayment: "bayar",
      });
      this.getAllMenu();
      // alert(response.data.message)
    }
  };

  render() {
    const {
      meja,
      pilihan,
      listMenu,
      show,
      modePayment,
      payMoney,
      showList,
      listMenuPayment,
    } = this.state;

    console.log("Cek list menu", listMenu);
    console.log("Cek payment: ", listMenuPayment);
    console.log("Cek calculate total: ")
    var nomorMeja;
    var menu;
    var footer;

    if (this.grandTotalProduct() !== 0) {
      footer = (
        <>
        
          <nav
            class="navbar sticky-bottom bg-body-tertiary"
            onClick={this.openListPayment}
            style={{ height: "80px" , cursor:'pointer'}}
          >
            {/* <Container> */}
              <a class="navbar-brand" >
                {this.grandTotalProduct()} Produk | Estimasi Harga : Rp.{" "}
                {this.grandTotal()}
              </a>
              <Button onClick={this.openPaymentModal}>
                <Icon.CashStack /> Pembayaran
              </Button>
            {/* </Container> */}
          </nav>
        </>
      );
    } else {
      footer = <></>;
    }

    nomorMeja = (
      <>
      {/* <Container style={{ backgroundColor: "teal" }}> */}
        <div style={{ textAlign: "center", backgroundColor:'teal' }}>
          <h2 style={{ color: "whitesmoke" }}>PILIH NOMOR MEJA ANDA</h2>
          {meja.map((data, index) => (
            <>
              <Button
                key={index}
                style={{ marginLeft: "40px", marginRight: "40px" }}
                value={data}
                onClick={() => this.pilihMeja(data)}
                >
                Meja {data}
              </Button>
            </>
          ))}
        </div>
      {/* </Container> */}
          </>
    );

    if (pilihan === 0) {
      menu = (
        // <Container>
          <div style={{backgroundColor:'orange',}} >
            <Row style={{ marginBottom: "40px" }}>
              <h3 className={Style.MenuHeader} style={{textAlign: "center", backgroundColor: 'black', color: 'whitesmoke'}}>
                Makanan Berat
              </h3>
              {listMenu.map((data, index) =>
                data.jenis === "Makanan Berat" ? (
                  <>
                    <Card
                      style={{
                        width: "18rem",
                        marginRight: "42px",
                        marginBottom: "40px",
                      }}
                    >
                      <Card.Img
                        variant="top"
                        key={index}
                        src={data.foto}
                        width={262}
                        height={175}
                      />
                      <Card.Body style={{ textAlign: "center" }}>
                        <Card.Title>{data.nama}</Card.Title>
                        <Card.Text>
                          <h4>(Rp. {data.harga})</h4>
                        </Card.Text>
                        <Card.Text style={{ height: "80px" }}>
                          {data.deskripsi}
                        </Card.Text>
                        {data.quantity ? (
                          <>
                            <Row>
                              <Col>
                                <Button
                                  disabled
                                  variant="dark"
                                  style={{ marginRight: "15px" }}
                                  onClick={() =>
                                    this.handleKurangQuantity(index)
                                  }
                                >
                                  <Icon.DashSquareFill />
                                </Button>
                              </Col>
                              <Col sm={1}>
                                <Card.Text style={{ marginTop: "6px" }}>
                                  {data.quantity}
                                </Card.Text>
                              </Col>
                              <Col>
                                <Button
                                  disabled
                                  variant="dark"
                                  onClick={() =>
                                    this.handleTambahQuantity(index)
                                  }
                                >
                                  <Icon.PlusSquareFill />
                                </Button>
                              </Col>
                            </Row>
                          </>
                        ) : (
                          <Col style={{ justifyContent: "center" }}>
                            <Button
                              disabled
                              style={{ width: "100px" }}
                              onClick={() =>
                                this.handleTambahKeranjang(data, index)
                              }
                            >
                              Pilih
                            </Button>
                          </Col>
                        )}
                      </Card.Body>
                    </Card>
                  </>
                ) : (
                  <></>
                )
              )}
            </Row>
            <Row style={{ marginBottom: "40px" }}>
              <h3 style={{ textAlign: "center", backgroundColor: "peachpuff" }}>
                Minuman
              </h3>
              {listMenu.map((data, index) =>
                data.jenis === "Minuman" ? (
                  <>
                    <Card
                      style={{
                        width: "18rem",
                        marginRight: "42px",
                        marginBottom: "40px",
                      }}
                    >
                      <Card.Img
                        variant="top"
                        key={index}
                        src={data.foto}
                        width={262}
                        height={175}
                      />
                      <Card.Body style={{ textAlign: "center" }}>
                        <Card.Title>{data.nama}</Card.Title>
                        <Card.Text>
                          <h4>(Rp. {data.harga})</h4>
                        </Card.Text>
                        <Card.Text style={{ height: "80px" }}>
                          {data.deskripsi}
                        </Card.Text>
                        {data.quantity ? (
                          <>
                            <Row>
                              <Col>
                                <Button
                                  disabled
                                  variant="dark"
                                  style={{ marginRight: "15px" }}
                                  onClick={() =>
                                    this.handleKurangQuantity(index)
                                  }
                                >
                                  <Icon.DashSquareFill />
                                </Button>
                              </Col>
                              <Col sm={1}>
                                <Card.Text style={{ marginTop: "6px" }}>
                                  {data.quantity}
                                </Card.Text>
                              </Col>
                              <Col>
                                <Button
                                  disabled
                                  variant="dark"
                                  onClick={() =>
                                    this.handleTambahQuantity(index)
                                  }
                                >
                                  <Icon.PlusSquareFill />
                                </Button>
                              </Col>
                            </Row>
                          </>
                        ) : (
                          <Col style={{ justifyContent: "center" }}>
                            <Button
                              disabled
                              style={{ width: "100px" }}
                              onClick={() =>
                                this.handleTambahKeranjang(data, index)
                              }
                            >
                              Pilih
                            </Button>
                          </Col>
                        )}
                      </Card.Body>
                    </Card>
                  </>
                ) : (
                  <></>
                )
              )}
            </Row>
            <Row style={{ marginBottom: "40px" }}>
              <h3 style={{ textAlign: "center", backgroundColor: "peachpuff" }}>
                Tambahan
              </h3>
              {listMenu.map((data, index) =>
                data.jenis === "Tambahan" ? (
                  <>
                    <Card
                      style={{
                        width: "18rem",
                        marginRight: "42px",
                        marginBottom: "40px",
                      }}
                    >
                      <Card.Img
                        variant="top"
                        key={index}
                        src={data.foto}
                        width={262}
                        height={175}
                      />
                      <Card.Body style={{ textAlign: "center" }}>
                        <Card.Title>{data.nama}</Card.Title>
                        <Card.Text>
                          <h4>(Rp. {data.harga})</h4>
                        </Card.Text>
                        <Card.Text style={{ height: "80px" }}>
                          {data.deskripsi}
                        </Card.Text>
                        {data.quantity ? (
                          <>
                            <Row>
                              <Col>
                                <Button
                                  disabled
                                  variant="dark"
                                  style={{ marginRight: "15px" }}
                                  onClick={() =>
                                    this.handleKurangQuantity(index)
                                  }
                                >
                                  <Icon.DashSquareFill />
                                </Button>
                              </Col>
                              <Col sm={1}>
                                <Card.Text style={{ marginTop: "6px" }}>
                                  {data.quantity}
                                </Card.Text>
                              </Col>
                              <Col>
                                <Button
                                  disabled
                                  variant="dark"
                                  onClick={() =>
                                    this.handleTambahQuantity(index)
                                  }
                                >
                                  <Icon.PlusSquareFill />
                                </Button>
                              </Col>
                            </Row>
                          </>
                        ) : (
                          <Col style={{ justifyContent: "center" }}>
                            <Button
                              disabled
                              style={{ width: "100px" }}
                              onClick={() =>
                                this.handleTambahKeranjang(data, index)
                              }
                            >
                              Pilih
                            </Button>
                          </Col>
                        )}
                      </Card.Body>
                    </Card>
                  </>
                ) : (
                  <></>
                )
              )}
            </Row>
          </div>
        // </Container>
      );
    } else {
      menu = (
        // <Container>
          <div>
            <Row style={{ marginBottom: "40px" }}>
              <h3 style={{ textAlign: "center", backgroundColor: "peachpuff" }}>
                Makanan Berat
              </h3>
              {listMenu.map((data, index) =>
                data.jenis === "Makanan Berat" ? (
                  <>
                    <Card
                      style={{
                        width: "18rem",
                        marginRight: "42px",
                        marginBottom: "40px",
                      }}
                    >
                      <Card.Img
                        variant="top"
                        key={index}
                        src={data.foto}
                        width={262}
                        height={175}
                      />
                      <Card.Body style={{ textAlign: "center" }}>
                        <Card.Title>{data.nama}</Card.Title>
                        <Card.Text>
                          <h4>(Rp. {data.harga})</h4>
                        </Card.Text>
                        <Card.Text style={{ height: "80px" }}>
                          {data.deskripsi}
                        </Card.Text>
                        {data.quantity ? (
                          <>
                            <Row>
                              <Col>
                                <Button
                                  variant="dark"
                                  style={{ marginRight: "15px" }}
                                  onClick={() =>
                                    this.handleKurangQuantity(index)
                                  }
                                >
                                  <Icon.DashSquareFill />
                                </Button>
                              </Col>
                              <Col sm={1}>
                                <Card.Text style={{ marginTop: "6px" }}>
                                  {data.quantity}
                                </Card.Text>
                              </Col>
                              <Col>
                                <Button
                                  variant="dark"
                                  onClick={() =>
                                    this.handleTambahQuantity(index)
                                  }
                                >
                                  <Icon.PlusSquareFill />
                                </Button>
                              </Col>
                            </Row>
                          </>
                        ) : (
                          <Col style={{ justifyContent: "center" }}>
                            <Button
                              style={{ width: "100px" }}
                              onClick={() =>
                                this.handleTambahKeranjang(data, index)
                              }
                            >
                              Pilih
                            </Button>
                          </Col>
                        )}
                      </Card.Body>
                    </Card>
                  </>
                ) : (
                  <></>
                )
              )}
            </Row>
            <Row style={{ marginBottom: "40px" }}>
              <h3 style={{ textAlign: "center", backgroundColor: "peachpuff" }}>
                Minuman
              </h3>
              {listMenu.map((data, index) =>
                data.jenis === "Minuman" ? (
                  <>
                    <Card
                      style={{
                        width: "18rem",
                        marginRight: "42px",
                        marginBottom: "40px",
                      }}
                    >
                      <Card.Img
                        variant="top"
                        key={index}
                        src={data.foto}
                        width={262}
                        height={175}
                      />
                      <Card.Body style={{ textAlign: "center" }}>
                        <Card.Title>{data.nama}</Card.Title>
                        <Card.Text>
                          <h4>(Rp. {data.harga})</h4>
                        </Card.Text>
                        <Card.Text style={{ height: "80px" }}>
                          {data.deskripsi}
                        </Card.Text>
                        {data.quantity ? (
                          <>
                            <Row>
                              <Col>
                                <Button
                                  variant="dark"
                                  style={{ marginRight: "15px" }}
                                  onClick={() =>
                                    this.handleKurangQuantity(index)
                                  }
                                >
                                  <Icon.DashSquareFill />
                                </Button>
                              </Col>
                              <Col sm={1}>
                                <Card.Text style={{ marginTop: "6px" }}>
                                  {data.quantity}
                                </Card.Text>
                              </Col>
                              <Col>
                                <Button
                                  variant="dark"
                                  onClick={() =>
                                    this.handleTambahQuantity(index)
                                  }
                                >
                                  <Icon.PlusSquareFill />
                                </Button>
                              </Col>
                            </Row>
                          </>
                        ) : (
                          <Col style={{ justifyContent: "center" }}>
                            <Button
                              style={{ width: "100px" }}
                              onClick={() =>
                                this.handleTambahKeranjang(data, index)
                              }
                            >
                              Pilih
                            </Button>
                          </Col>
                        )}
                      </Card.Body>
                    </Card>
                  </>
                ) : (
                  <></>
                )
              )}
            </Row>
            <Row style={{ marginBottom: "40px" }}>
              <h3 style={{ textAlign: "center", backgroundColor: "peachpuff" }}>
                Tambahan
              </h3>
              {listMenu.map((data, index) =>
                data.jenis === "Tambahan" ? (
                  <>
                    <Card
                      style={{
                        width: "18rem",
                        marginRight: "42px",
                        marginBottom: "40px",
                      }}
                    >
                      <Card.Img
                        variant="top"
                        key={index}
                        src={data.foto}
                        width={262}
                        height={175}
                      />
                      <Card.Body style={{ textAlign: "center" }}>
                        <Card.Title>{data.nama}</Card.Title>
                        <Card.Text>
                          <h4>(Rp. {data.harga})</h4>
                        </Card.Text>
                        <Card.Text style={{ height: "80px" }}>
                          {data.deskripsi}
                        </Card.Text>
                        {data.quantity ? (
                          <>
                            <Row>
                              <Col>
                                <Button
                                  variant="dark"
                                  style={{ marginRight: "15px" }}
                                  onClick={() =>
                                    this.handleKurangQuantity(index)
                                  }
                                >
                                  <Icon.DashSquareFill />
                                </Button>
                              </Col>
                              <Col sm={1}>
                                <Card.Text style={{ marginTop: "6px" }}>
                                  {data.quantity}
                                </Card.Text>
                              </Col>
                              <Col>
                                <Button
                                  variant="dark"
                                  onClick={() =>
                                    this.handleTambahQuantity(index)
                                  }
                                >
                                  <Icon.PlusSquareFill />
                                </Button>
                              </Col>
                            </Row>
                          </>
                        ) : (
                          <Col style={{ justifyContent: "center" }}>
                            <Button
                              style={{ width: "100px" }}
                              onClick={() =>
                                this.handleTambahKeranjang(data, index)
                              }
                            >
                              Pilih
                            </Button>
                          </Col>
                        )}
                      </Card.Body>
                    </Card>
                  </>
                ) : (
                  <></>
                )
              )}
            </Row>
          </div>
        // </Container>
      );
    }

    return (
      <>
        {nomorMeja}
        {/* <Container> */}
          {pilihan === 0 ? <h3>Meja: </h3> : <h3>Meja: {pilihan}</h3>}
        {/* </Container> */}
        {menu}
        {footer}
        <PaymentModal
          show={show}
          handleChangeMoney={this.handleChangeMoney}
          grandTotal={this.grandTotal}
          payMoney={payMoney}
          modePayment={modePayment}
          close={this.closePaymentModal}
          orderPayments={this.orderPayments}
        />
        <ListProductPayment 
        show={showList} 
        close={this.closeListPayment}
        listMenu = {listMenu}
        totalHarga = {this.calculateTotal} />
      </>
    );
  }
}
