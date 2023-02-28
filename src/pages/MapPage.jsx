

const fakeData = [
  { id: 10, name: "Henry Jones", job: "Teacher", location: "Dallas, TX", age: 40 },
  { id: 20, name: "Sally Carson", job: "Manager", location: "Phoenix, AZ", age: 37 },
  { id: 30, name: "Bill Henderson", job: "Entrepreneur", location: "Miami, FL", age: 28 },
  { id: 40, name: "Taylor Morgan", job: "Programmer", location: "Eugene, OR", age: 25 },
  { id: 50, name: "Angela Dorn", job: "Marketer", location: "Cleveland, OH", age: 50 }
]


const MapPage = (props) => {

  return (
    <>
      <h1>Array Mapping</h1>
      <p>Check the code for this page for details on array mapping in React. Below I am taking some fake data and array mapping it to create a nice-looking data table.</p>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Location</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          { fakeData.map( data => (
            <tr key={data.id}>
              <td>{data.name}</td>
              <td>{data.job}</td>
              <td>{data.age}</td>
              <td>{data.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default MapPage