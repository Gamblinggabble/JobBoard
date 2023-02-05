package com.example.jobboard.controllers;

import com.example.jobboard.model.Company;
import com.example.jobboard.services.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Optional;


@RestController
public class CompanyController {

    @Autowired
    private CompanyService companyService;

    @GetMapping("/company/{id}")
    public Optional<Company> getCompanyById(@PathVariable Long id){
        return companyService.findCompanyById(id);
    }

    @GetMapping("/companies")
    private Collection<Company> getAll(){
        return companyService.findAllCompanies();
    }

    @PostMapping("/addCompany")
    public void addCompany(@RequestBody Company company){
        companyService.saveCompanyToDb(company);
    }

    @PutMapping("/updateCompanyInfo/{id}")
    public Optional<Object> updateCompany(@PathVariable("companyId") Long companyId, @RequestBody Company newCompany) {
        return companyService.findCompanyById(companyId)
                .map((company) -> {
                    company.setName(newCompany.getName());
                    company.setEmail(newCompany.getEmail());
                    company.setPhoneNumber(newCompany.getPhoneNumber());
                    company.setCity(newCompany.getCity());
                    company.setAddress(newCompany.getAddress());
                    company.setWebsite(newCompany.getWebsite());
                    company.setDescription(newCompany.getDescription());
                    company.setPassword(newCompany.getPassword());
                    companyService.saveCompanyToDb(company);
                    return null;
                });

    }
}
