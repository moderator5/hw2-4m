document.getElementById('productForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const description = document.getElementById('description').value.trim();
  const price = parseFloat(document.getElementById('price').value);

  const data = {
    name: name,
    description: description,
    price: price
  };

  fetch('http://localhost:8000/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      alert('Товар успешно отправлен!');
      document.getElementById('productForm').reset();
    } else {
      alert('Ошибка при отправке.');
    }
  })
  .catch(error => {
    console.error('Ошибка:', error);
    alert('Ошибка соединения с сервером.');
  });
});
