/**
 * Класс Entity - базовый для взаимодействия с сервером.
 * Имеет свойство URL, равно пустой строке.
 * */
class Entity {
  static URL = '';

  static list(data, callback) {
    return createRequest({
      url: this.URL,
      data,
      method: 'GET',
      callback,
    });
  }

  /**
   * Создаёт счёт или доход/расход с помощью запроса
   * на сервер. (в зависимости от того,
   * что наследуется от Entity)
   * */
  static create(data, callback) {
    return createRequest({
      url: this.URL,
      data,
      method: 'POST',
      callback,
    });
  }

  /**
   * Удаляет информацию о счёте или доходе/расходе
   * (в зависимости от того, что наследуется от Entity)
   * */
  static remove(data, callback) {
    return createRequest({
      url: this.URL,
      data,
      method: 'DELETE',
      callback,
    });
  }
}
