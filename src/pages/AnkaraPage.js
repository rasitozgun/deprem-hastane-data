import "../App.css";
import React, { useState, useEffect } from "react";
import g from "../data/ankaradata.json";
import ReactPaginate from "react-paginate";
import Navbar from "../components/Navbar";

function AnkaraPage() {
  const [items, setItem] = useState([]);
  //arama yapılacak veriyi tutuyor hiç değişmiyor
  const [searchItem, setSearchItem] = useState([]);
  //filter item arama kutusundaki metni tutuyor
  const [filterIsimItem, setFilterIsimItem] = useState("");

  const [filterYerItem, setFilterYerItem] = useState("");
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

  const handleIsimFilter = (e) => {
    if (e.target.value === "") {
      setItem(searchItem);
    } else if (regex.test(e.target.value)) {
      const filterResult = items.filter((item) =>
        item["isim"]
          .toLocaleLowerCase("tr-TR")
          .includes(e.target.value.toLocaleLowerCase("tr-TR"))
      );
      setItem(filterResult);
    }
    setFilterIsimItem(e.target.value);
  };
  const handleYerFilter = (e) => {
    if (e.target.value === "") {
      setItem(searchItem);
    } else if (regex.test(e.target.value)) {
      const filterResult = items.filter((item) =>
        item["yer"]
          .toLocaleLowerCase("tr-TR")
          .includes(e.target.value.toLocaleLowerCase("tr-TR"))
      );
      setItem(filterResult);
    }
    setFilterYerItem(e.target.value);
  };

  const handlePageClick = (data) => {
    setCurrentItemPage(data.selected + 1);
  };

  return (
    <div>
      <Navbar />

      <h1 className="h1">
        {" "}
        Ankara Hastanelerine Getirilen Kişiler 7 Şubat 22.50
      </h1>
      <br />
      <div className="input-group">
        <div className="form-outline ">
          <input
            type="search"
            value={filterIsimItem}
            onInput={(e) => handleIsimFilter(e)}
            className={"form-control justify-content-center"}
            placeholder="İsim Aratınız"
          />
          <br />
          <input
            type="search"
            value={filterYerItem}
            onInput={(e) => handleYerFilter(e)}
            className={"form-control justify-content-center"}
            placeholder="Yer Bilgisi Aratınız"
          />
        </div>
      </div>
      <br />
      <table className="table table-hover table-striped table-sm table-responsive-sm table-bordered">
        <thead>
          <tr className={"text-center"}>
            <th scope="col">Sıra</th>
            <th scope="col">İsim</th>
            <th scope="col">Sevk Geldiği Yer</th>
            <th scope="col">Hastane</th>
            <th scope="col">Cinsiyet</th>
            <th scope="col">Servis</th>
            <th scope="col">Yoğun bakım</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((d) => (
            <tr key={d["sira"]} className={"text-center"}>
              <th scope="row">{d["sira"]}</th>
              {d["isim"] === null ? <td></td> : <td>{d["isim"]}</td>}
              <td>{d["yer"]}</td>
              <td>{d["hastane"]}</td>
              <td>{d["cinsiyet"]}</td>
              {d["servis"] === null ? <td></td> : <td>{d["servis"]}</td>}
              {d["yogunBakim"] === null ? (
                <td></td>
              ) : (
                <td>{d["yogunBakim"]}</td>
              )}
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

export default AnkaraPage;
