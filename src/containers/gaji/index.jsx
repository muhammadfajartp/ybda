import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsArrowLeftRight } from "react-icons/bs";
import { terbilangIndonesia, ubahRupiah } from "../../helper/numtotext";
const Gaji = () => {
  const [minMax, setMinMax] = useState({ min: 1000000, max: null });
  const [nilai, setNilai] = useState({ satu: null, dua: null });
  const [terbilang, setTerbilang] = useState({ gaji: 0, bruto: null });
  const [notif, setNotif] = useState(false);
  const [result, setResult] = useState({ gaji: null, bruto: null });

  const buatGenerate = () => {
    const { satu, dua } = nilai;
    const min = Math.min(satu, dua);
    const max = Math.max(satu, dua);
    const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
    setResult({ ...result, gaji: randomValue });
    const x = terbilangIndonesia(randomValue);
    setTerbilang({ ...terbilang, gaji: x });
  };

  const handleNilai = (e) => {
    const { name, value } = e.target;
    setNilai((prev) => {
      return { ...prev, [name]: value };
    });
    e.preventDefault();
  };

  const tukarNilai = () => {
    if (nilai.satu >= 1000000 && nilai.dua >= 1000000) {
      setNilai({ satu: nilai.dua, dua: nilai.satu });
    } else {
      setNotif(true);
    }
  };

  const hitungBruto = () => {
    const pajak = Math.floor(result.gaji * 20) / 100;
    const pajakpenghasilan = (Math.floor(result.gaji + pajak) * 5) / 100;
    const bruto = result.gaji + pajak + pajakpenghasilan;
    setResult({ ...result, bruto: bruto });
  };

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center bg-white border rounded-3 py-3 mt-4">
      <Row className="w-100">
        <Col className="px-4 py-1">
          <p className="text-start">
            Generate Nilai{" "}
            {notif ? (
              <span style={{ color: "red" }}>MINIMAL NILAI 1.000.000</span>
            ) : null}
          </p>
          <div className="input-group">
            <input
              name="satu"
              type="number"
              min={minMax.min}
              className="form-control py-2"
              placeholder="Nilai Pertama"
              aria-label="nilaisatu"
              value={nilai.satu}
              onChange={handleNilai}
            />
            <span className="input-group-text">
              <BsArrowLeftRight />
            </span>
            <input
              name="dua"
              type="number"
              min={minMax.max}
              className="form-control"
              placeholder="Nilai Kedua"
              aria-label="nilaidua"
              value={nilai.dua}
              onChange={handleNilai}
            />
            <button className="text-white btn btn-primary" onClick={tukarNilai}>
              Tukar Nilai
            </button>
          </div>
        </Col>
        {console.log(nilai)}
        {console.log(result)}
        {console.log(terbilang.gaji)}
      </Row>
      <Row className="w-100">
        <Col sm={12} className="px-4 py-1">
          <div className="input-group">
            <span class="input-group-text" id="inputGroup-sizing-sm">
              Generate Nilai
            </span>
            <input
              value={result.gaji}
              type="number"
              className="form-control py-2"
              aria-label="generate"
            />
            <button
              className="text-white btn btn-primary"
              onClick={buatGenerate}
            >
              Generate Nilai
            </button>
          </div>
        </Col>
        <Col sm={12} className="px-4 py-1">
          <div class="input-group">
            <span class="input-group-text">Terbilang</span>
            <textarea
              value={`${terbilang.gaji} rupiah`}
              class="form-control"
              aria-label="With textarea"
              disabled
            ></textarea>
          </div>
        </Col>
      </Row>
      <Row className=" mt-4 w-100">
        <Col sm={12} className="px-4 py-1">
          <p className="text-start">Perhitungan Gaji dan Bruto</p>
          <div className="input-group">
            <span className="input-group-text">Gaji Pokok</span>
            <input
              type="text"
              value={ubahRupiah(result.gaji)}
              className="form-control py-2"
              placeholder="Gaji Pokok"
              aria-label="gaji"
            />
            <span className="input-group-text">Tunjangan 20%</span>
            <input
              type="text"
              value={ubahRupiah(Math.floor(result.gaji * 20) / 100)}
              className="form-control py-2"
              placeholder="Tunjangan Pokok"
              aria-label="tunjangan"
            />
            <button
              className="text-white btn btn-primary"
              onClick={hitungBruto}
            >
              Hitung Bruto
            </button>
          </div>
        </Col>

        <Col sm={12} className="px-4 py-1">
          <div class="input-group">
            <span class="input-group-text">Nilai Bruto</span>
            <textarea
              value={ubahRupiah(result.bruto)}
              class="form-control"
              aria-label="With textarea"
            ></textarea>
          </div>
        </Col>
        <Col sm={12} className="px-4 py-1">
          <div class="input-group">
            <span class="input-group-text">Bruto Terbilang</span>
            <textarea
              value={terbilangIndonesia(result.bruto)}
              class="form-control"
              aria-label="With textarea"
              disabled
            ></textarea>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Gaji;
