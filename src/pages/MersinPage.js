import '../App.css';
import React, { useState, useEffect } from 'react';
import f from '../data/mersindata.json';
import ReactPaginate from 'react-paginate';
import NavbarSite from '../components/Navbar';
import LocIcon from '../components/LocIcon';

function MersinPage() {
  const [items, setItem] = useState([]);
  const [searchItem, setSearchItem] = useState([]);
  const [filterItem, setFilterItem] = useState('');
  const [currentItemPage, setCurrentItemPage] = useState(1);
  const postItemPerPage = 120;

  const regex = /[a-z]/g;

  useEffect(() => {
    setItem(f.data);
    setSearchItem(f.data);
  }, []);

  const lastPostIndex = currentItemPage * postItemPerPage;
  const firstPostIndex = lastPostIndex - postItemPerPage;
  const currentPosts = items.slice(firstPostIndex, lastPostIndex);

  const totalPosts = Math.ceil(items.length / postItemPerPage);

  const handleFilter = (e) => {
    if (e.target.value === '') {
      setItem(searchItem);
    } else if (regex.test(e.target.value)) {
      const filterResult = searchItem.filter((item) =>
        item['isim']
          .toLocaleLowerCase('tr-TR')
          .includes(e.target.value.toLocaleLowerCase('tr-TR'))
      );
      setItem(filterResult);
    }
    setFilterItem(e.target.value);
  };

  const handlePageClick = (data) => {
    setCurrentItemPage(data.selected + 1);
  };

  return (
    <div>
      <NavbarSite />
      <h1 className="h1">
        {' '}
        Mersin Şehir Hastanesine Getirilen Kişiler
        <a href="https://goo.gl/maps/WfZ9WuCjXWC7RLA27">
          <LocIcon></LocIcon>
        </a>
      </h1>
      <br />
      <div className="input-group">
        <div className="form-outline ">
          <input
            type="search"
            value={filterItem}
            onInput={(e) => handleFilter(e)}
            className={'form-control justify-content-center'}
            placeholder="Search"
          />
        </div>
      </div>
      <br />
      <table className="table table-hover table-striped table-sm table-responsive-sm table-bordered">
        <thead>
          <tr className={'text-center'}>
            <th scope="col">Sıra</th>
            <th scope="col">İsim</th>
            <th scope="col">Yaş</th>
            <th scope="col">Yer</th>
            <th scope="col">Hayati tehlike</th>
            <th scope="col">Açıklama</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((d) => (
            <tr
              key={d.Sno}
              className={'text-center' + (d['ht'] === 1 ? ' table-danger' : '')}
            >
              <th scope="row">{d['sira']}</th>
              <td>{d['isim']}</td>
              <td>{d['yas']}</td>
              <td>{d['yer']}</td>
              {d['ht'] === 1 ? (
                <td>Hayati tehlike var</td>
              ) : d['ht'] === 0 ? (
                <td>Hayati tehlike yok</td>
              ) : (
                <td></td>
              )}
              <td>{d['detay']}</td>
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

export default MersinPage;
