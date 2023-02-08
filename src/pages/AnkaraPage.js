import '../App.css';
import React, { useState, useEffect } from 'react';
import g from '../data/ankaradata.json';
import ReactPaginate from 'react-paginate';
import Navbar from '../components/Navbar';
import LocIcon from '../components/LocIcon';
function AnkaraPage() {
  const [items, setItem] = useState([]);
  //arama yapılacak veriyi tutuyor hiç değişmiyor
  //filter item arama kutusundaki metni tutuyor
  const [filterIsimItem, setFilterIsimItem] = useState('');

  const [currentItemPage, setCurrentItemPage] = useState(1);
  const postItemPerPage = 120;

  // const regex = /[a-z]/g;

  useEffect(() => {
    setItem(g.data);
  }, []);

  const lastPostIndex = currentItemPage * postItemPerPage;
  const firstPostIndex = lastPostIndex - postItemPerPage;
  const currentPosts = items.slice(firstPostIndex, lastPostIndex);

  const totalPosts = Math.ceil(items.length / postItemPerPage);

  const handlePageClick = (data) => {
    setCurrentItemPage(data.selected + 1);
  };

  return (
    <div>
      <Navbar />

      <h1 className="h1">
        {' '}
        Ankara Hastanelerine Getirilen Kişiler 7 Şubat 22.50
        <a href="https://www.google.com/maps/search/ankara+%C5%9Fehir+hastanesi/@39.9168173,32.7881995,12.04z">
          <LocIcon></LocIcon>
        </a>
      </h1>
      <br />
      <div className="input-group">
        <div className="form-outline ">
          <input
            type="search"
            value={filterIsimItem}
            onInput={(e) => setFilterIsimItem(e.target.value)}
            className={'form-control justify-content-center'}
            placeholder="İsim Aratınız"
          />
          <br />
        </div>
      </div>
      <br />
      <table className="table table-hover table-striped table-sm table-responsive-sm table-bordered">
        <thead>
          <tr className={'text-center'}>
            <th scope="col">Sıra</th>
            <th scope="col">İsim</th>
            <th scope="col">Yaş</th>
            <th scope="col">Sevk Geldiği Yer</th>
            <th scope="col">Hastane</th>
            <th scope="col">Cinsiyet</th>
            <th scope="col">Servis</th>
            <th scope="col">Yoğun bakım</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts
            .filter((item) => {
              return filterIsimItem === ''
                ? item
                : item.isim.toLocaleLowerCase('tr-TR').includes(filterIsimItem);
            })
            .map((d) => (
              <tr key={d['sira']} className={'text-center'}>
                <th scope="row">{d['sira']}</th>
                {d['isim'] === null ? <td></td> : <td>{d['isim']}</td>}
                {d['yas'] === null ? <td></td> : <td>{d['yas']}</td>}
                {d['yer'] === null ? <td></td> : <td>{d['yer']}</td>}
                <td>{d['hastane']}</td>
                <td>{d['cinsiyet']}</td>
                {d['servis'] === null ? <td></td> : <td>{d['servis']}</td>}
                {d['yogunBakim'] === null ? (
                  <td></td>
                ) : (
                  <td>{d['yogunBakim']}</td>
                )}
              </tr>
            ))}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={totalPosts}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={'pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
        activeLinkClassName={'page-link'}
      />
    </div>
  );
}

export default AnkaraPage;
