/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = ({url, data, method, callback}) => {
    console.log(data);
    let xhr  =new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open(method, url);
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => formData.append(`${key}`, `${value}`));
    xhr.send(formData);

    xhr.addEventListener('load', (event)=> {
        if(xhr.status === 200) {
            callback(null, xhr.response);
        }
    });

    xhr.addEventListener('error', (event)=> {
        callback(xhr.response, null);
    });
};
