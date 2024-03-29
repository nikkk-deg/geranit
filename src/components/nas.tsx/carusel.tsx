import { Box } from "@mui/material";

export default function CaruselDobro() {
  return (
    <Box
      sx={{
        // maxWidth: "500px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        margin: "150px 0 0 0 ",
      }}
    >
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
        style={{ display: "block" }}
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-400"
              src="/img/nas1.jpg"
              alt="First slide"
              height={"400px"}
              width={"600px"}
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-400"
              src="/img/nas2.jpg"
              alt="Second slide"
              width={"600px"}
              height={"400px"}
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </Box>
  );
}
