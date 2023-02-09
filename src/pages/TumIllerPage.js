import "../App.css";
import React, { useState, useEffect } from "react";
import g from "../data/localization.json";
import ReactPaginate from "react-paginate";
import NavbarSite from "../components/Navbar";
function TumIllerPage() {
  //gösterilecek filtrelenen veri
  const [items, setItem] = useState([]);
  //arama yapılacak veriyi tutuyor hiç değişmiyor
  const [searchItem, setSearchItem] = useState([]);
  //filter item arama kutusundaki metni tutuyor
  const [nameFilter, setNameFilter] = useState("");
  const [placeFilter, setPlaceFilter] = useState("");
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

  const handleNameFilter = (e) => {
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
    setNameFilter(e.target.value);
  };
  const handlePlaceFilter = (e) => {
    if (e.target.value === "") {
      setItem(searchItem);
    } else if (regex.test(e.target.value)) {
      const filterResult = items.filter((item) =>
        item["il"]
          .toLocaleLowerCase("tr-TR")
          .includes(e.target.value.toLocaleLowerCase("tr-TR"))
      );
      setItem(filterResult);
    }
    setPlaceFilter(e.target.value);
  };

  const handlePageClick = (data) => {
    setCurrentItemPage(data.selected + 1);
  };

  return (
    <div>
      <NavbarSite />
      <h1 className="h1"> Tüm illerdeki Hastalar</h1>
      <br />
      <div className="input-group">
        <div className="form-outline ">
          <input
            type="search"
            value={nameFilter}
            onChange={(e) => handleNameFilter(e)}
            className={"form-control justify-content-center"}
            placeholder="İsim Aratınız"
          />
          <br />
          <input
            type="search"
            value={placeFilter}
            onChange={(e) => handlePlaceFilter(e)}
            className={"form-control justify-content-center"}
            placeholder="Yer Bilgisi Aratınız"
          />
        </div>
      </div>
      <br />
      <table className="table table-hover table-striped table-sm table-responsive-sm table-bordered">
        <thead>
          <tr className={"text-center"}>
            <th scope="col">İsim</th>
            <th scope="col">Yaş</th>
            <th scope="col">Cinsiyet</th>
            <th scope="col">İl</th>
            <th scope="col">İlçe</th>
            <th scope="col">Yattığı Hastane</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((d) => (
            <tr key={d.Sno} className={"text-center"}>
              <th scope="row">{d["isim"]}</th>
              <td>{d["yas"]}</td>
              <td>{d["cinsiyet"]}</td>
              <td>{d["il"]}</td>
              <td>{d["ilce"]}</td>
              <td>{d["hastane"]}</td>
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

export default TumIllerPage;
