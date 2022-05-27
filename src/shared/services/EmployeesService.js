import { TABLE_QUERY } from "../Constants";

class EmployeesServices {

    getAllEmployees = () => {
        return fetch('http://localhost:9002/graphql', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: TABLE_QUERY })
        })
            .then(res => res.json())
    }
}

export const EmployeesServiceInstance = new EmployeesServices();