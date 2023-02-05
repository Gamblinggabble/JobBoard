package com.example.jobboard.controllers;

import com.example.jobboard.model.Profile;
import com.example.jobboard.services.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Optional;

@RestController
public class ProfileController {

    @Autowired
    private ProfileService profileService;

    @GetMapping("/profile/{id}")
    public Optional<Profile> getProfileById(@PathVariable Long id){
        return profileService.findProfileById(id);
    }

    @GetMapping("/profiles")
    private Collection<Profile> getAll(){
        return profileService.findAllProfiles();
    }

    @PostMapping("/addProfile")
    public void addProfile(@RequestBody Profile profile){
        profileService.saveProfileToDb(profile);
    }

    @PutMapping("/updateProfileInfo/{id}")
    public Optional<Object> updateProfile(@PathVariable("profileId") Long profileId, @RequestBody Profile newProfile) {
        return profileService.findProfileById(profileId)
                .map((profile) -> {
                    profile.setFirstName(newProfile.getFirstName());
                    profile.setLastName(newProfile.getLastName());
                    profile.setEmail(newProfile.getEmail());
                    profile.setPassword(newProfile.getPassword());
                    profileService.saveProfileToDb(profile);
                    return null;
                });

    }
}
