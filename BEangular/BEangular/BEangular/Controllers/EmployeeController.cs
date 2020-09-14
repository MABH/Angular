using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BEangular.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BEangular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly ApplicationDBContext _context;

        public EmployeeController(ApplicationDBContext context)
        {
            _context = context;
        }
        // GET: api/<EmployeeController>
        [HttpGet]
        public ActionResult<List<Employee>> Get()
        {
            try
            {
                var listEmployee = _context.Employee.ToList();
                return Ok(listEmployee);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET api/<EmployeeController>/5
        [HttpGet("{id}")]
        public ActionResult<Employee> Get(int id)
        {
            try
            {
                var employee = _context.Employee.Find(id);
                if (employee == null)
                {
                    return NotFound();
                }
                return Ok(employee);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // POST api/<EmployeeController>
        [HttpPost]
        public ActionResult Post([FromBody] Employee employee)
        {
            try
            {
                _context.Add(employee);
                _context.SaveChanges();

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT api/<EmployeeController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Employee employee)
        {
            try
            {
                if (id != employee.Id)
                {
                    return BadRequest();
                }
                _context.Entry(employee).State = EntityState.Modified;
                _context.Update(employee);
                _context.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // DELETE api/<EmployeeController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            try
            {
                var employee = _context.Employee.Find(id);
                if (employee == null)
                {
                    return NotFound();
                }
                _context.Remove(employee);
                _context.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
