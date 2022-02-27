import { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import axios from "axios";

function User() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data))
      .finally(() => setLoading(false));
  }, [id]); // id eklemeyi unutma //

  return (
    <div>
      <h1>User Detail</h1>
      {loading && <div>Loading...</div>}
      {/* loading ilk geldiğinde boş bir "{}" gösteriyor onu engellemek için "!loading &&" yazdık */}
      {!loading && <code>{JSON.stringify(user)}</code>}
      {/* id: {id} */}

      <br />
      <br />
      <button>
        {/* users/user yapmayı unutma app.js'de children olarak tanımladığımız için böyle yaptık */}
        <Link to={`/users/user/${parseInt(id) + 1}`}>
          Next User({parseInt(id) + 1})
        </Link>
      </button>
      <Outlet />
    </div>

  );
}
export default User;
