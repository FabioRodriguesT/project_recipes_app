function Meals() {
  const { email } = JSON.parse(localStorage.getItem('user') || 'Email not Found');

  return (
    <div>
      <h1>
        {email}
        , Página de Meals
      </h1>
    </div>
  );
}

export default Meals;
