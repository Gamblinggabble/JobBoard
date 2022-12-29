package com.example.jobboard.services;

import com.example.jobboard.model.Company;
import com.example.jobboard.repos.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.logging.Level;
import java.util.logging.Logger;

import static java.util.Optional.empty;

@Service
public class CompanyService {

    @Autowired
    private CompanyRepository companyRepository;
    private final static Logger LOGGER =
            Logger.getLogger(Logger.GLOBAL_LOGGER_NAME);


    private void saveCompanyToDb(Company company) {
        try {
            companyRepository.save(company);
        } catch (Exception e) {
            LOGGER.log(Level.SEVERE, "Company {} could not be saved in Database", company.getName());
        }
    }

    private Optional<Long> searchCompanyById(Long id) {
        try {
            Optional<Company> companyData = companyRepository.findCompanyById(id);
            return companyData.stream().findFirst().map(Company::getId);
        } catch (Exception e) {
            LOGGER.log(Level.WARNING, "Failed to find company in local DB for id: {}", id);
        }
        return empty();
    }
}
