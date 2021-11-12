import http from "./http-common";

const getAll = async () => {
  let response = await http.get("/locations")
  return response
};

const get = async id => {
  let response =  await http.get(`/locations/${id}`);
  return response
};

const create = async data => {
  let response =  await http.post("/locations", data);
  return response
};

const update = async (id, data) => {
  let response =  await http.put(`/locations/${id}`, data);
  return response
};

const remove = async id => {
  let response =  await http.delete(`/locations/${id}`);
  return response
};



const locationService = {
  getAll,
  get,
  create,
  update,
  remove,
};

export default locationService;