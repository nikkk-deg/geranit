import { Box } from "@mui/material";
import TechDobro from "../components/nas.tsx/tech-dobro";

export default function NASdobro() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "-ms-flexbox",
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
              className="d-block w-200"
              src="/img/nas1.jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-200"
              src="/img/nas2.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-200"
              src="/img/nas3.jpg"
              alt="Third slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-200"
              src="/img/nas4.jpg"
              alt="Third slide"
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

      <Box>
        Synology SA3610 - ГАРАНТИЯ 2 ГОДА, только в Synology-Store! Synology
        SA3610 & SA3410 Гибкая система хранения петабайтного уровня для растущих
        потребностей в хранении данных. Когда масштабируемость соответствует
        производительности Устройства Synology SA3610 и SA3410 разработаны для
        масштабирования по требованию и обеспечивают емкость хранения до 1,7 ПБ
        при полном расширении1, 2. Они позволяют корпоративным центрам обработки
        данных, студиям и растущим компаниям хранить большие объемы данных без
        ущерба для скорости и производительности. Гибкое расширение емкости
        хранения Гибкое масштабирование серии SA3600 & SA3400 для удовлетворения
        растущих требований в управлении данными в любое время. Увеличьте
        емкость системы хранения, добавив до семи модулей расширения RX1222sas с
        12 отсеками по мере расширения развертывания. Сетевые возможности Два
        встроенных порта 10GbE RJ-45 позволяют осуществлять высокоскоростную
        передачу данных сразу после установки. Пользователи также могут повысить
        избыточность и пропускную способность сети, добавив дополнительные платы
        адаптеров 10/25/40GbE и Fibre Channel в два доступных слота расширения
        PCIe 3.04. Надежность и безотказность Защитите данные и используйте
        аппаратные и программные средства защиты для обеспечения доступности
        данных и служб в случае неполадок или вредоносных атак. Зеркалирование
        данных Создайте кластер Synology High Availability (SHA) на своих
        серверах, чтобы минимизировать потерю данных и воспользоваться аварийным
        переключением на резервный ресурс за считаные минуты с помощью двух
        серверов SA3610 или SA3410, используемых в качестве активного и
        пассивного сервера. Два блока питания. Сократите вероятность сбоев
        электропитания с помощью резервных блоков питания и уменьшите количество
        критических точек отказа оборудования с помощью резервных системных
        вентиляторов. Удаленное управление. Возможность управлять сервером, даже
        если основные сети не работают. Отказоустойчивость данных BTFRS
      </Box>

      <Box>
        <TechDobro />
      </Box>
    </Box>
  );
}
