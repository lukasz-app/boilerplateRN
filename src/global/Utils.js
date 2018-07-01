const Utils = {};

const errorCode = (error) => {
  if (error.response && error.response.status) {
    return error.response.status;
  }
  return null;
};
const handleError = (error) => {
  if (error.response && error.response.data) {
    // if (error.response.data.status_code && error.response.data.status_code === 401) {
    //   DeviceEventEmitter.emit('logoutUser');
    // }
    if (error.response.data.message) {
      return error.response.data.message;
    }

    if (error.response.data.error_description) {
      return error.response.data.error_description;
    }
  }
  if (error.response) {
    console.log(error.response);
  } else {
    console.log(error);
  }

  if (error.error && error.error.message) {
    return error.error.message;
  }
  return 'Check your internet connection';
};

const showAlert = (alert) => {
  // Alert.alert('', error, [{ text: 'OK' }]);
  Utils.showAlert('', alert);
};

const showErrorAlert = (error) => {
  Utils.showErrorAlert(handleError(error));
  // showAlert(handleError(error));
};
export { Utils, errorCode, handleError, showAlert, showErrorAlert };
