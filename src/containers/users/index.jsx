import React, { useEffect, useState } from "react";
import { Container, Col, Row, Table, Modal, Button } from "react-bootstrap";
import { getUsers, getUsersPage, putUsersPage } from "../../Apis/jph";
import {
  BsPencilSquare,
  BsFillTrashFill,
  BsFillEyeFill,
  BsPersonAdd,
} from "react-icons/bs";

const Users = () => {
  const tableHead = ["Nama", "Username", "Email", "Aksi"];
  const [dataUsers, setDataUsers] = useState([]);
  const [dataUsersModal, setDataUsersModal] = useState([]);
  const [modal, setModal] = useState({
    show: false,
    disable: false,
    add: false,
  });
  const [editUsers, setEditUser] = useState([]);
  const handleClose = () => setModal({ ...modal, show: false });

  useEffect(() => {
    const fetchDataUsers = async () => {
      try {
        const reqDataUsers = getUsers();
        const response = await reqDataUsers.get();
        setDataUsers(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDataUsers();
  }, []);

  const editUser = (idnya) => {
    const users = dataUsers.find((user) => user.id === idnya);
    setDataUsersModal(users);
  };

  const hapusUser = (idnya) => {
    const index = dataUsers.findIndex((user) => user.id === idnya);
    if (index !== -1) {
      dataUsers.splice(index, 1);
      setDataUsers([...dataUsers]);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataUsersModal(() => {
      return { ...dataUsersModal, [name]: value };
    });
    e.preventDefault();
  };

  const saveData = () => {
    const index = dataUsers.findIndex((user) => user.id === dataUsersModal.id);
    if (index !== -1) {
      dataUsers.splice(index, 1, dataUsersModal);
      setDataUsers([...dataUsers]);
    }
    setModal({ ...modal, show: false });
  };

  const addData = () => {
    const index = dataUsers.push(dataUsersModal);
    setDataUsers([...dataUsers]);
    setModal({ show: false, disable: false, add: false });
  };

  const lastId = dataUsers.reduce((acc, obj) => {
    return obj.id ? Math.max(acc, obj.id) : acc;
  }, 0);
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Row className="d-flex flex-column bg-white border rounded-3 mt-4 w-100">
        <Col className="d-flex justify-content-end p-2">
          <button
            className="btn btn-primary border-0 px-1"
            onClick={() => {
              setModal({ show: true, disable: false, add: true });
            }}
          >
            Tambah User <BsPersonAdd />
          </button>
        </Col>
        <Col>
          <Table responsive>
            <thead>
              <tr>
                <th>Nomor</th>
                {tableHead &&
                  tableHead.map((data, index) => <th key={index}>{data}</th>)}
              </tr>
            </thead>
            <tbody>
              {dataUsers.map((data, index) => (
                <>
                  <tr key={index}>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.username}</td>
                    <td>{data.email}</td>
                    <td>
                      <button
                        className="bg-white border-0 px-1"
                        onClick={() => {
                          editUser(data.id);
                          setModal({ ...modal, show: true, disable: true });
                        }}
                      >
                        <BsFillEyeFill />
                      </button>

                      <button
                        className="bg-white border-0 px-1"
                        onClick={() => {
                          editUser(data.id);
                          setModal({ show: true, disable: false, add: false });
                        }}
                      >
                        <BsPencilSquare />
                      </button>
                      <button
                        className="bg-white border-0 px-1"
                        onClick={() => hapusUser(data.id)}
                      >
                        <BsFillTrashFill color="red" size={20} />
                      </button>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </Table>
        </Col>
        <Modal
          show={modal.show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              {modal.add
                ? "Tambah User"
                : `${modal.disable == true ? "Data" : "Edit Data"}`}{" "}
              : {modal.add ? null : dataUsersModal.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {modal
              ? modal.add && (
                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Name"
                      name="id"
                      onChange={handleChange}
                    />
                    <label htmlFor="floatingInput">id (number)</label>
                  </div>
                )
              : null}
            <div className="form-floating mb-3">
              <input
                defaultValue={
                  modal && modal.add == false ? dataUsersModal.name : null
                }
                disabled={modal.disable}
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Name"
                name="name"
                onChange={handleChange}
              />
              <label htmlFor="floatingInput">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                defaultValue={
                  modal && modal.add == false ? dataUsersModal.username : null
                }
                disabled={modal.disable}
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Username"
                name="username"
                onChange={handleChange}
              />
              <label htmlFor="floatingInput">Username</label>
            </div>
            <div className="form-floating mb-3">
              <input
                defaultValue={
                  modal && modal.add == false ? dataUsersModal.email : null
                }
                disabled={modal.disable}
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="Email address"
                name="email"
                onChange={handleChange}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                defaultValue={
                  modal && modal.add == false ? dataUsersModal.phone : null
                }
                disabled={modal.disable}
                type="number"
                className="form-control"
                id="floatingInput"
                placeholder="Number Phone"
                name="phone"
                onChange={handleChange}
              />
              <label htmlFor="floatingInput">Number Phone</label>
            </div>
            <div className="form-floating mb-3">
              <input
                defaultValue={
                  modal && modal.add == false ? dataUsersModal.website : null
                }
                disabled={modal.disable}
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Website"
                name="website"
                onChange={handleChange}
              />
              <label htmlFor="floatingInput">Website</label>
            </div>
            <p>Address </p>
            <div className="row g-2 mb-3">
              <div className="col-md">
                <div className="form-floating">
                  <input
                    defaultValue={
                      modal && modal.add == false
                        ? dataUsersModal.address &&
                          dataUsersModal.address.street
                        : null
                    }
                    disabled={modal.disable}
                    type="text"
                    className="form-control"
                    id="floatingInputGrid"
                    placeholder="Street"
                    name="street"
                    onChange={handleChange}
                  />
                  <label htmlFor="floatingInputGrid">Street</label>
                </div>
              </div>
              <div className="col-md">
                <div className="form-floating">
                  <input
                    defaultValue={
                      modal && modal.add == false
                        ? dataUsersModal.address && dataUsersModal.address.city
                        : null
                    }
                    disabled={modal.disable}
                    type="text"
                    className="form-control"
                    id="floatingInputGrid"
                    placeholder="City"
                    name="city"
                    onChange={handleChange}
                  />
                  <label htmlFor="floatingInputGrid">City</label>
                </div>
              </div>
              <div className="col-md">
                <div className="form-floating">
                  <input
                    defaultValue={
                      modal && modal.add == false
                        ? dataUsersModal.address && dataUsersModal.address.code
                        : null
                    }
                    disabled={modal.disable}
                    type="number"
                    className="form-control"
                    id="floatingInputGrid"
                    placeholder="Zipcode"
                    name="zipcode"
                    onChange={handleChange}
                  />
                  <label htmlFor="floatingInputGrid">Zipcode</label>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            {modal && modal.disable == false ? (
              <Button
                variant="primary"
                onClick={modal.add ? addData : saveData}
              >
                Save Changes
              </Button>
            ) : null}
          </Modal.Footer>
        </Modal>
      </Row>
    </Container>
  );
};

export default Users;
