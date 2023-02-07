import "../App.css";
import React, { useState, useEffect } from "react";
import g from "../data/adanadata.json";
import ReactPaginate from "react-paginate";
import Navbar from "../components/Navbar";

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
      item["isim"].toLocaleLowerCase('tr-TR').includes(e.target.value.toLocaleLowerCase('tr-TR'))
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
      <Navbar />

      <h1 className="h1"> Adana Şehir Hastanesine Getirilen Kişiler</h1>
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
            <th scope="col">Numara</th>
            <th scope="col">İsim</th>
            <th scope="col">Sevk Geldiği Yer</th>
            <th scope="col">Hastane</th>
            <th scope="col">Kayıt Tarihi</th>
            <th scope="col">Servis ve Yoğun Bakım</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((d) => (
            <tr key={d.Sno} className={"text-center"}>
              <th scope="row">{d["Numara"]}</th>
              <td>{d["isim"]}</td>
              <td>{d["sevkGelis"]}</td>
              <td>{d["hastane"]}</td>
              <td>{d["girisTarihi"]}</td>
              <td>{d["servisBakim"]}</td>
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
