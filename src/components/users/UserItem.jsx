import PropTypes from "prop-types"
import { Link } from "react-router-dom"

function UserItem({user : {login, avatar_url}}) {
  return (
    <article className="card shadow-md compact side bg-base-100">
        <div className="flex-row items-center space-x-4 card-body">
            <section>
                <div className="avatar">
                    <div className="rounded-full shadow w-14 h-14">
                        <img src={avatar_url} alt="User Avatar" />
                    </div>
                </div>
            </section>
            <section>
                <h2 className="card-title">{login}</h2>
                <Link className="text-base-content text-opacity-40" to={`/user/${login}`}>Visit Profile</Link>
            </section>
        </div>
    </article>
  )
}



export default UserItem