import { Box } from "@mui/material";

export default function TechDobro() {
  return (
    <table
      className="stats"
      style={{ border: "1px solid #999", borderRadius: "15px" }}
    >
      <tbody>
        <tr className="cap" style={{ display: "none" }}>
          <td colSpan={3}>Произодитель</td>
        </tr>
        <tr className="gray">
          <td className="name">
            <span>Страна </span>
          </td>
          <td>Россия</td>
          <td className="right" />
        </tr>
        <tr className="cap">
          <td colSpan={3}>
            <Box
              sx={{
                width: "190px",
                fontWeight: "bold",
                margin: "0 auto 0 auto",
              }}
            >
              Общие характеристики
            </Box>
          </td>
        </tr>
        <tr className="gray">
          <td className="name">
            <span>Назначение </span>
          </td>
          <td>Для крупного бизнеса</td>
          <td className="right" />
        </tr>
        <tr>
          <td className="name">
            <span>Линейка / серия </span>
          </td>
          <td>ДОБРО</td>
          <td className="right" />
        </tr>
        <tr className="gray">
          <td className="name">
            <span>Тип </span>
          </td>
          <td>Cетевой накопитель (NAS)</td>
          <td className="right" />
        </tr>
        <tr>
          <td className="name">
            <span>Форм-фактор </span>
          </td>
          <td>Рековый (серверный шкаф)</td>
          <td className="right" />
        </tr>
        <tr className="cap">
          <td colSpan={3}>
            {" "}
            <Box
              sx={{
                width: "100px",
                fontWeight: "bold",
                margin: "0 auto 0 auto",
              }}
            >
              Процессор
            </Box>
          </td>
        </tr>
        <tr className="gray">
          <td className="name">
            <span>Количество ядер </span>
          </td>
          <td>12 ядер</td>
          <td className="right" />
        </tr>
        <tr>
          <td className="name">
            <span>Частота процессора </span>
          </td>
          <td>2.1 (base) / 2.7 (turbo) GHz </td>
          <td className="right" />
        </tr>

        <tr>
          <td className="gray">
            <span>Кэш память </span>
          </td>
          <td className="gray">18 MB</td>
          <td className="right" />
        </tr>
        <tr>
          <td className="name">
            <span>Механизм аппаратного шифрования </span>
          </td>
          <td>Да</td>
          <td className="right" />
        </tr>
        <tr className="cap">
          <td colSpan={3}>
            {" "}
            <Box
              sx={{
                width: "70px",
                fontWeight: "bold",
                margin: "0 auto 0 auto",
              }}
            >
              Память
            </Box>
          </td>
        </tr>
        <tr className="gray">
          <td className="name">
            <span>Тип оперативной памяти </span>
          </td>
          <td>DDR4 ECC</td>
          <td className="right" />
        </tr>
        <tr>
          <td className="name">
            <span>Оперативная память (RAM) </span>{" "}
            <a
              href="#"
              className="question"
              title="Оперативная память в комплекте"
              data-description="Оперативная память в комплекте"
            />
          </td>
          <td>16 GB</td>
          <td className="right" />
        </tr>
        <tr className="gray">
          <td className="name">
            <span>Возможность расширения памяти до </span>
          </td>
          <td>128 Gb</td>
          <td className="right" />
        </tr>
        <tr>
          <td className="name">
            <span>Общее количество слотов для памяти </span>
          </td>
          <td>4</td>
          <td className="right" />
        </tr>
        <tr className="cap">
          <td colSpan={3}>
            {" "}
            <Box
              sx={{
                width: "340px",
                fontWeight: "bold",
                margin: "0 auto 0 auto",
              }}
            >
              Отсеки под жесткие диски (HDD/SSD/SAS)
            </Box>
          </td>
        </tr>
        <tr className="gray">
          <td className="name">
            <span>Максимальная емкость каждого HDD</span>
          </td>
          <td>20 Tb</td>
          <td className="right" />
        </tr>
        <tr>
          <td className="name">
            <span>Максимальная емкость всех дисков </span>
          </td>
          <td>1920 TB (20 TB HDD X 96)</td>
          <td className="right" />
        </tr>
        <tr className="gray">
          <td className="name">
            <span>Форм-фактор дисков</span>
          </td>
          <td>2.5"/3.5"</td>
          <td className="right" />
        </tr>
        <tr>
          <td className="name">
            <span>Возможность расширения массива </span>
          </td>
          <td>Да</td>
          <td className="right" />
        </tr>
        <tr className="gray">
          <td className="name">
            <span>Макс.количество дисков с расширен. </span>
          </td>
          <td>96</td>
          <td className="right" />
        </tr>
        <tr>
          <td className="name">
            <span>Макс.емкость дисков с расширением </span>
          </td>
          <td>552.96</td>
          <td className="right" />
        </tr>
        <tr className="gray">
          <td className="name">
            <span>Поддержка горячей замены HDD </span>
          </td>
          <td>Да</td>
          <td className="right" />
        </tr>
        <tr>
          <td className="name">
            <span>Поддержка твердотельных SSD дисков </span>
          </td>
          <td>Да</td>
        </tr>
        <tr className="gray">
          <td className="name">
            <span>Кэш-память SSD (чтение/запись) </span>
          </td>
          <td>Да</td>
          <td className="right" />
        </tr>
        <tr>
          <td className="name">
            <span>SSD TRIM</span>
          </td>
          <td>Да</td>
          <td className="right" />
        </tr>
        <tr className="cap">
          <td colSpan={3}>
            {" "}
            <Box
              sx={{
                width: "160px",
                fontWeight: "bold",
                margin: "0 auto 0 auto",
              }}
            >
              Сетевой интерфейс
            </Box>
          </td>
        </tr>
        <tr className="gray">
          <td className="name">
            <span>Количество портов RJ-45 1GbE LAN </span>
          </td>
          <td>4</td>
          <td className="right" />
        </tr>
        <tr>
          <td className="name">
            <span>Количество портов RJ-45 10GbE LAN </span>{" "}
            <a
              href="#"
              className="question"
              title="Уже установленных на борту устройства оптических сетевых карт скоростью 10Gb/s"
              data-description="Уже установленных на борту устройства оптических сетевых карт скоростью 10Gb/s"
            />
          </td>
          <td>2</td>
          <td className="right" />
        </tr>
        <tr className="gray">
          <td className="name">
            <span>Слот для 10GbE (SFP+) карты PCIe </span>{" "}
            <a
              href="#"
              className="question"
              title="Могут быть установлены дополнительные сетевые карты "
              data-description="Могут быть установлены дополнительные сетевые карты "
            />
          </td>
          <td>Да</td>
          <td className="right" />
        </tr>
        <tr>
          <td className="name">
            <span>Link Aggregation (агрегация портов) </span>
          </td>
          <td>Да</td>
          <td className="right" />
        </tr>
        <tr className="gray">
          <td className="name">
            <span>Поддержка WiFi (адаптер) </span>
          </td>
          <td>Да</td>
          <td className="right" />
        </tr>
        <tr className="cap">
          <td colSpan={3}>Внешние интерфейсы</td>
        </tr>
        <tr className="gray">
          <td className="name">
            <span>Порт USB 3.0 </span>
          </td>
          <td>2</td>
          <td className="right" />
        </tr>
        <tr>
          <td className="name">
            <span>Порт eSATA </span>
          </td>
          <td>1</td>
          <td className="right" />
        </tr>
        <tr className="gray">
          <td className="name">
            <span>Порт расширения (для корзин расширения) </span>
          </td>
          <td>Да</td>
          <td className="right" />
        </tr>
        <tr className="cap">
          <td colSpan={3}>Видеонаблюдение</td>
        </tr>
        <tr className="gray">
          <td className="name">
            <span>Макс. кол-во подключений IP-камер </span>{" "}
            <a
              href="#"
              className="question"
              title="Макс. кол-во подключений IP-камер (подсказка)"
              data-description="Макс. кол-во подключений IP-камер (подсказка)"
            />
          </td>
          <td>128</td>
          <td className="right" />
        </tr>
        <tr>
          <td className="name">
            <span>Общее кол-во кадров в секунду 1080р (H.264) (FPS) </span>
          </td>
          <td>3840 FPS @ 1080p (1920x1080)</td>
          <td className="right" />
        </tr>
        <tr className="gray">
          <td className="name">
            <span>Общее кол-во кадров в секунду 1080p (MJPEG) </span>
          </td>
          <td>700 FPS @ 1080p (1920?1080)</td>
          <td className="right" />
        </tr>
        <tr>
          <td className="name">
            <span>Лицензий для IP-камер в комплекте </span>
          </td>
          <td>2</td>
          <td className="right" />
        </tr>
        <tr className="cap">
          <td colSpan={3}>
            {" "}
            <Box
              sx={{
                width: "270px",
                fontWeight: "bold",
                margin: "0 auto 0 auto",
              }}
            >
              Дополнительные характеристики
            </Box>
          </td>
        </tr>
        <tr className="gray">
          <td className="name">
            <span>Wake on LAN/WAN </span>
          </td>
          <td>Да</td>
          <td className="right" />
        </tr>
        <tr>
          <td className="name">
            <span>Включение/выключение по расписанию </span>
          </td>
          <td>Да</td>
          <td className="right" />
        </tr>
        <tr className="gray">
          <td className="name">
            <span>Автозапуск после сбоя питания </span>
          </td>
          <td>Да</td>
          <td className="right" />
        </tr>
        <tr className="cap">
          <td colSpan={3}>Виртуализация</td>
        </tr>
        <tr className="gray">
          <td className="name">
            <span>Дополнительная установка ОС Windows/MAC/Linux </span>
          </td>
          <td>Да</td>
          <td className="right" />
        </tr>
        <tr className="cap">
          <td colSpan={3}>
            {" "}
            <Box
              sx={{
                width: "230px",
                fontWeight: "bold",
                margin: "0 auto 0 auto",
              }}
            >
              Программные возможности
            </Box>
          </td>
        </tr>
        <tr className="gray">
          <td className="name">
            <span>Совместимые браузеры </span>
          </td>
          <td>IE, Firefox, Chrome, Safari, Yandex, Opera ...</td>
          <td className="right" />
        </tr>
        <tr>
          <td className="name">
            <span>Менеджеры закачек (Torrent-client) </span>
          </td>
          <td>Да</td>
          <td className="right" />
        </tr>
        <tr className="gray">
          <td className="name">
            <span>UPnP/DLNA-сервер </span>
          </td>
          <td>Да</td>
          <td className="right" />
        </tr>
        <tr>
          <td className="name">
            <span>FTP-сервер </span>
          </td>
          <td>Да</td>
          <td className="right" />
        </tr>
        <tr className="gray">
          <td className="name">
            <span>Mail Server </span>
          </td>
          <td>Да</td>
          <td className="right" />
        </tr>
        <tr>
          <td className="name">
            <span>Сервер мультимедиа iTunes </span>
          </td>
          <td>Да</td>
          <td className="right" />
        </tr>
        <tr className="gray">
          <td className="name">
            <span>Принт-сервер </span>
          </td>
          <td>Да</td>
          <td className="right" />
        </tr>
        <tr>
          <td className="name">
            <span>Поддержка сетевого протокола iSCSI </span>
          </td>
          <td>Да</td>
          <td className="right" />
        </tr>
        <tr className="gray">
          <td className="name">
            <span>Макс. к-во учетных записей пользователей </span>
          </td>
          <td>16000</td>
          <td className="right" />
        </tr>
        <tr>
          <td className="name">
            <span>Макс. кол-во групп </span>
          </td>
          <td>512</td>
          <td className="right" />
        </tr>
        <tr className="gray">
          <td className="name">
            <span>Макс. кол-во общих папок </span>
          </td>
          <td>512</td>
          <td className="right" />
        </tr>
        <tr>
          <td className="name">
            <span>Макс. кол-во одновременных CIFS/AFP/FTP </span>
          </td>
          <td>4096</td>
          <td className="right" />
        </tr>
        <tr className="gray">
          <td className="name">
            <span>Интеграция списка управления Windows (ACL) </span>
          </td>
          <td>Да</td>
          <td className="right" />
        </tr>
        <tr>
          <td className="name">
            <span>Проверка подлинности NFS Kerberos </span>
          </td>
          <td>Да</td>
          <td className="right" />
        </tr>
        <tr className="gray">
          <td className="name">
            <span>VPN Server </span>
          </td>
          <td>есть</td>
          <td className="right" />
        </tr>
        <tr>
          <td className="name">
            <span>DDSM (максимально) </span>
          </td>
          <td>100</td>
          <td className="right" />
        </tr>
        <tr className="gray">
          <td className="name">
            <span>Операционная система </span>
          </td>
          <td>DSM</td>
          <td className="right" />
        </tr>
        <tr className="cap">
          <td colSpan={3}>
            {" "}
            <Box
              sx={{
                width: "200px",
                fontWeight: "bold",
                margin: "0 auto 0 auto",
              }}
            >
              Внешние характеристики
            </Box>
          </td>
        </tr>
        <tr className="gray">
          <td className="name">
            <span>Потребляемая мощность (max) (Вт.) </span>
          </td>
          <td>136 Вт</td>
          <td className="right" />
        </tr>
        <tr>
          <td className="name">
            <span>Рабочая температура </span>
          </td>
          <td>0°C – 35°C</td>
          <td className="right" />
        </tr>
        <tr className="gray">
          <td className="name">
            <span>Размер (Ш х В х Д) </span>
          </td>
          <td>88 mm x 482 mm x 724 mm</td>
          <td className="right" />
        </tr>
        <tr>
          <td className="name">
            <span>Уровень шума работы </span>
          </td>
          <td>57 дБ</td>
          <td className="right" />
        </tr>
        <tr className="gray">
          <td className="name">
            <span>Материал корпуса </span>
          </td>
          <td>Металл</td>
          <td className="right" />
        </tr>
      </tbody>
    </table>
  );
}
