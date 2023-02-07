import "../App.css";
import React, { useState, useEffect } from "react";
import g from "../data/kayseridata.json";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

function KayseriPage() {
  const [items, setItem] = useState([]);
  const [searchItem, setSearchItem] = useState([]);
  const [filterItem, setFilterItem] = useState("");
  const [currentItemPage, setCurrentItemPage] = useState(1);
  const postItemPerPage = 120;

  const regex = /[a-z]/g;

  useEffect(() => {
    setItem(g.data);
    setSearchItem(g.data);
  }, []);

  const lastPostIndex = currentItemPage * postItemPerPage;
  const firstPostIndex = lastPostIndex - postItemPerPage;
  const currentPosts = items.slice(firstPostIndex, lastPostIndex);

  const totalPosts = Math.ceil(items.length / postItemPerPage);

  const handleFilter = (e) => {
    if (e.target.value === "") {
      setItem(searchItem);
    } else if (regex.test(e.target.value)) {
      const filterResult = searchItem.filter((item) =>
        item["isim"].toLowerCase().includes(e.target.value.toLowerCase())
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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/">Mersin</Link>
            </li>
            <li className="nav-item">
              <Link to="/kayseriPage">Kayseri</Link>
            </li>
          </ul>
        </div>
      </nav>

      <h1 className="h1"> Kayseri Şehir Hastanesine Getirilen Kişiler</h1>
      <br />
      <div className="input-group">
        <div className="form-outline ">
          <input
            type="search"
            value={filterItem}
            onInput={(e) => handleFilter(e)}
            className={"form-control justify-content-center"}
            placeholder="Search"
          />
        </div>
      </div>
      <br />
      <table className="table table-hover table-striped table-sm table-responsive-sm table-bordered">
        <thead>
          <tr className={"text-center"}>
            <th scope="col">Giriş tarihi</th>
            <th scope="col">İsim</th>
            <th scope="col">Yakın No</th>
            <th scope="col">Geldiği Yer</th>
            <th scope="col">Tanı</th>
            <th scope="col">Birim</th>
            <th scope="col">Yatış yeri</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((d) => (
            <tr key={d.Sno} className={"text-center"}>
              <th scope="row">{d["girisTarihi"]}</th>
              <td>{d["isim"]}</td>
              <td>{d["yakinNo"]}</td>
              <td>{d["yer"]}</td>
              <td>{d["tani"]}</td>
              <td>{d["birim"]}</td>
              <td>{d["yatisYeri"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={totalPosts}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
        activeLinkClassName={"page-link"}
      />
    </div>
  );
}

export default KayseriPage;
