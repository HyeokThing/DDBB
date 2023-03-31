package com.project.ddbb.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
@RequiredArgsConstructor
public class AuthController {

    /**
     * 로그인
     * @return
     */
    @PostMapping("/signIn")
    public String signIn() {

        return "auth/sign_in";
    }

    /**
     * 회원가입
     * @return
     */
    @PostMapping("/signUp")
    public String signUp() {

        return "auth/sign_up";
    }

    /**
     * 회원가입 프로세스
     * @return
     */
    @PostMapping("/join")
    public String join() {

        return "auth/sign_up_complete";
    }

    /**
     * ID 유효성 검증
     * @return
     */
    @PostMapping("/idValidation")
    public boolean idValidation() {

        return true;
    }
}
