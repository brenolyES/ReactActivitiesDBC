function Menu({nameRouter, name, Link}) {
  return (
    <>
      <li>
        <Link to={nameRouter}>{name}</Link>
      </li>
    </>
  );
}

export default Menu;