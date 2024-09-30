function Emp({ name, age, hobbies, style }) {
  // console.log(props.name);
  hobbies.map((itm) => console.log(itm));

  return (
    <div>
      {style}
      {false ? (
        <h1>
          {name} - the age is {age} : <h1>nothing</h1>
        </h1>
      ) : (
        <h1>nothing</h1>
      )}

      {hobbies.map((itm) => (
        <h1>{itm}</h1>
      ))}
    </div>
  );
}

export default Emp;
