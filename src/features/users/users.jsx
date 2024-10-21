import { useDispatch, useSelector } from "react-redux"
import { deleteUser, salaryDown, salaryUp, swipeDown, swipeUp } from "./users.slice"

export const Users = () => {


    const users = useSelector(state => state.items)
    const dispatch = useDispatch()

    return <>
        <h1>Users</h1>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>gender</th>
                    <th>salary</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user => 
                        <tr key={user.id}>
                            <td className="td">{user.id}</td>
                            <td className="td">{user.name}</td>
                            <td className="td">{user.gender}</td>
                            <td className="td">{user.salary}</td>
                            <td>
                                <button className="button first" onClick={() => dispatch(salaryUp(user.id))}>+</button>
                                <button className="button second" onClick={() => dispatch(salaryDown(user.id))}>-</button>
                                <button className="button third" onClick={() => dispatch(deleteUser(user.id))}>x</button>
                                <button className="button fourth" onClick={() => dispatch(swipeUp(user.id))}>↑</button>
                                <button className="button fourth" onClick={() => dispatch(swipeDown(user.id))}>↓</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </>
}