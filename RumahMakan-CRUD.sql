drop table if exists Menu;
create table Menu(
	id int primary key generated always as identity not null,
	nama varchar(100) not null,
	harga int not null,
	stock int not null,
	deskripsi varchar(255),
	foto varchar(255),
	active boolean not null,
	create_by varchar(50) not null,
	create_date date not null,
	modify_by varchar(50),
	modify_date date
);
alter table menu 
add unique(nama)

select * from Menu 
where active = true ;
order by active asc

insert into Menu(nama, harga, stock, deskripsi,foto, active, create_by, create_date)
values('Air Mineral', 2000, 99, 'Seharusnya air berwarna bening','https://awsimages.detik.net.id/community/media/visual/2015/01/20/050a658c-71a0-4bd6-b2e5-0a9c6023505e.jpg?w=600&q=90', true, 'Admin', 'now()'),
	  ('Nasi Putih', 5000, 99, 'Beras yang dicuci bersih, lalu dimasak dengan bantuan Rice Cooker', 'https://cdn.idntimes.com/content-images/community/2022/10/rice-7534040-960-720-5f33a6106b7b2abdfec00ff311918826-3fa803f3456abc23c1e65bc62cf36a62_600x400.jpg', true, 'Admin', 'now()');

update menu 
set nama='Air Mineral',
	harga=2000,
	stock=80,
	deskripsi='Air mengandung mineral tinggi, sehat dan bergizi',
	foto='https://awsimages.detik.net.id/community/media/visual/2015/01/20/050a658c-71a0-4bd6-b2e5-0a9c6023505e.jpg?w=600&q=90',
	active='true',
	modify_by='Admin',
	modify_date ='now()'
where id=4;

update menu 
set modify_by = 'Admin', 
    modify_date='now()', active=false 
where id = 1;
	
