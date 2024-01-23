import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { ProductService } from "../../services/Product";
import * as Icon from "react-bootstrap-icons";
import { FormInputProduct } from "./FormInputProduct";

export default class ProductPage extends React.Component {
  ProductModel = {
    id: 0,
    nama: "",
    harga: 0,
    stock: 0,
    deskripsi: "",
    jenis: "",
    foto: "",
    active: ""
  };

  constructor() {
    super();
    this.state = {
      listProduct: [],
      show: false,
      ProductModel: this.ProductModel,
      type: ""
    };
  }
  componentDidMount() {
    this.getAllProduct();
    localStorage.setItem('akses', 'admin')
  }
  closeModal = () => {
    this.setState({
      show: false,
    });
  };

  getAllProduct = async () => {
    const response = await ProductService.getAllProduct();
    console.log(response.data);
    if (response.success) {
      this.setState({
        listProduct: response.data,
      });
    }
  };

  //==================================================ADD PRODUCT==============================================
  openModalAddPrduct = () => {
    this.setState({
      show: true,
      type: "add"
    });
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      ProductModel: {
        ...this.state.ProductModel,
        [name]: value,
      },
    });
    console.log(value);
  };

  saveHandler = async () => {
    const { ProductModel } = this.state;
    const response = await ProductService.addProduct(ProductModel);
    if (response.success) {
      this.getAllProduct();
      this.setState({
        show: false,
        ProductModel: this.ProductModel,
      });
    }
  };
  //===============================================EDIT============================================
  openModalEdit = async (id) => {
    const response = await ProductService.getProductById(id);
    if (response.success) {
      this.setState({
        show: true,
        ProductModel: response.data,
        type: "edit"
      });
    }
  };

  editHandler = async () => {
    const {ProductModel} = this.state
    const response = await ProductService.editProduct(ProductModel)
    if (response.success){
      this.getAllProduct()
      this.setState({
        show: false,
        ProductModel : this.ProductModel
      })
    }
  }

  //=============================================DELETE========================================
  openModalDelete = async (id) => {
    const response = await ProductService.getProductById(id)
    if (response.success){
      this.setState({
        show: true,
        ProductModel : response.data,
        type: "delete"
      })
    }
  }
  
  deleteHandler = async () => {
    const {ProductModel} = this.state
    const response = await ProductService.deleteProduct(ProductModel.id)
    if (response.success) {
      this.getAllProduct()
      this.setState({
        show: false,
        ProductModel : this.ProductModel,

      })
    }
  }

  //==========================================ACTIVE==========================================
  openModalActive = async (id) => {
    const response = await ProductService.getProductById(id)
    if (response.success) {
      this.setState({
        show: true,
        ProductModel : response.data,
        type: "active"
      })
    }
  }
  
  activeHandler = async () => {
    const {ProductModel} = this.state
    const response = await ProductService.activeProduct(ProductModel.id)
    if (response.success) {
      this.getAllProduct()
      this.setState({
        show: false,
        ProductMode : this.ProductModel,
      })
    }
  }

  render() {
    const { listProduct, show, ProductModel, type } = this.state;
    console.log("Product Model: ", ProductModel);
    var buttonDelete;


    return (
      <>
        {/* <Container style={{ backgroundColor: "powderblue" }}> */}
          <div>
            <h1>Product Page</h1>
            <Button onClick={this.openModalAddPrduct}>Tambah Menu</Button>
            <h4 style={{ textAlign: "center" }}>Menu</h4>
            <table
              class="table table-sm table-bordered table-dark"
              style={{ textAlign: "center" }}
            >
              <thead>
                <tr>
                  <th>Nama Produk</th>
                  <th>Jenis</th>
                  <th>Harga Produk</th>
                  <th>Stock</th>
                  <th>Deskripsi</th>
                  <th>Gambar</th>
                  <th>Status Produk</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {listProduct.map((data, index) => (
                  <tr key={index}>
                    <td>{data.nama}</td>
                    <td>{data.jenis}</td>
                    <td>{data.harga}</td>
                    <td>{data.stock}</td>
                    <td>{data.deskripsi}</td>
                    <td>
                      <img src={data.foto} width={262} height={160}></img>
                    </td>
                    <td>
                        <Form.Check checked={data.active} disabled/>
                        </td>
                    <td>
                      <Button
                        style={{ marginBottom: "20px" }}
                        onClick={() => this.openModalEdit(data.id)}
                      >
                        <Icon.PencilSquare /> Edit
                      </Button>
                      {(data.active) === true? (
                        <Button
                      onClick={() => this.openModalDelete(data.id)}>
                        <Icon.Trash3 /> Delete
                      </Button>
                      ) : (<Button
                        onClick={() => this.openModalActive(data.id)}>
                          <Icon.Check2Square /> Active
                        </Button>)}
                      
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        {/* </Container> */}
        <FormInputProduct
          show={show}
          close={this.closeModal}
          handleChange={this.handleChange}
          saveHandler={this.saveHandler}
          type ={type}
          productModel = {ProductModel}
          editHandler = {this.editHandler}
          deleteHandler = {this.deleteHandler}
          activeHandler = {this.activeHandler}
        />
      </>
    );
  }
}
