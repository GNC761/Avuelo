import { EntityRepository, Repository } from "typeorm";
import { Employee } from "../model/Employee";

@EntityRepository(Employee)
class EmployeeRepository extends Repository<Employee> {}

export { EmployeeRepository };