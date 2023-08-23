import { useEffect } from "react";
import "./detail.scss";
import { useParams } from "react-router-dom";
import { getDetailAsync } from "../../redux/DetailSlice";
import { useDispatch, useSelector } from "react-redux";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.details.detail);
  const isLoading = useSelector((state) => state.details.isLoading);
  const error = useSelector((state) => state.details.error);
  useEffect(() => {
    dispatch(getDetailAsync(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <b>Loading...</b>;
  }

  if (error) {
    return <b>{error}</b>;
  }

  return (
    <>
      <div className="productspage">
        <div className="productwrapper">
          <div className="productimage">
            <img className="proimg" src={detail.Poster} alt="" />
          </div>
          <div className="productinfo">
            <h1 className="protitle">{detail.Title}</h1>
            <p className="prodesc">Genre:{detail.Genre}</p>
            <p className="prodesc">Released:{detail.Released}</p>
            <p className="prodesc">Writer:{detail.Writer}</p>
            <p className="prodesc">imdbRating :{detail.imdbRating}</p>
            <p className="prodesc">Actors:{detail.Actors}</p>
            <p className="prodesc">Runtime:{detail.Runtime}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
