import APIhandler from './api-handler';

const uploadExcel = (data) => {
  return APIhandler.post('members/add/bulk', data);
};

export {
  uploadExcel,
}