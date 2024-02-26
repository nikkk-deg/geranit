import { Box } from "@mui/material";

export default function Footer() {
  return (
    <footer className="mt-auto footer bg-secondary">
      <Box sx={{ paddingTop: "20px" }} className="container">
        <div className="row">
          <div className="col-md-3">
            <h2>ООО ГЕРАНИТ</h2>
          </div>

          <div className="col-md-3">
            <h5>Наши контакты</h5>
            <ul className="list-unstyled">
              <li>Email: info@geranit.ru</li>
              <li>Тел. : +7(499)112-43-72</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <p>© 2024 Геранит. Все права защищены.</p>
          </div>
        </div>
      </Box>
    </footer>
  );
}
