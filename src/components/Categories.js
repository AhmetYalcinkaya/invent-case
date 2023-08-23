import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategoryAsync } from "../redux/CategoriesSlice";
import { useDispatch, useSelector } from "react-redux";

const Categories = () => {
  const [title, setTitle] = useState("war");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");
  const dispatch = useDispatch();
  const category = useSelector((state) => state.categories.category.Search);
  const isLoading = useSelector((state) => state.categories.isLoading);
  const error = useSelector((state) => state.categories.error);

  useEffect(() => {
    dispatch(getCategoryAsync({ title, year, type }));
  }, []);

  if (isLoading) {
    return <b>Loading...</b>;
  }

  if (error) {
    return <b>{error}</b>;
  }
  return (
    <>
      <div className="field-container">
        <div className="field">
          <span className="text">Title(Required)</span>
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="field">
          <span className="text">Year</span>
          <input
            type="text"
            placeholder="Year"
            onChange={(e) => setYear(e.target.value)}
            value={year}
          />
        </div>
        <div className="field">
          <span className="text">Type</span>
          <input
            type="text"
            placeholder="movie,season,episode"
            onChange={(e) => setType(e.target.value)}
            value={type}
          />
        </div>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(getCategoryAsync({ title, year, type }))}
        >
          Search
        </button>
      </div>
      <div className="category">
        {category?.map((item, key) => (
          <Link to={`/products/${item.imdbID}`} className="link">
            <div key={key} className="card">
              <div className="card-body">
                <h5 className="card-title">{item.Title}</h5>
                <div>
                  <p class="card-text">Year:{item.Year}</p>
                  <p class="card-text">imdbID:{item.imdbID}</p>
                  <p class="card-text">Type:{item.Type}</p>
                </div>
              </div>
            </div>{" "}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Categories;
