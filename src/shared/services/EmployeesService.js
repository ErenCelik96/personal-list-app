import { QUERY } from "../Constants";

class EmployeesServices {

    getEmployees = () => {
        return fetch('http://localhost:9002/graphql', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: QUERY })
        })
            .then(res => res.json())
    }
}

export const EmployeesServiceInstance = new EmployeesServices();