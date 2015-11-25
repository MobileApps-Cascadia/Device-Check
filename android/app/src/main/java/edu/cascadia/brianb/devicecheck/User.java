package edu.cascadia.brianb.devicecheck;

import java.util.HashMap;

/**
 * Represents users contact information and loans
 * Created by brianb on 11/24/15.
 */
public class User {
    private String phone;
    private String email;
    private String fullName;
    private HashMap<String, Boolean> devices;

    public User() {}

    public User(String fullName, String email, String phone) {
        this.fullName = fullName;
        this.email = email;
        this.phone = phone;
    }

    public String getFullName() {
        return fullName;
    }
    public String getPhone() {
        return phone;
    }

    public String getEmail() {
        return email;
    }

    public HashMap<String, Boolean> getDevices(){
        return devices;
    }
}


