var api = {
    projectMembers: function(projectId) {//컨트롤러 메소드 이름이랑 같다 ->오브젝트 형식
        var params = {
            projectId: projectId//왼쪽은 키값 오른쪽은 벨류
        };

        $.ajax({
            type: "POST",
            url: "/projectMember/list",
            data: params,
            success: function(result){
                console.log(result.code);
                console.log(result);
            },
            error: function(error){
                alert("API 에러가 발생했습니다.");
                console.error(error);
            }
        });
    },
    findId: function(email,name) {//컨트롤러 메소드 이름이랑 같다 ->오브젝트 형식
        let params = {
            email: email,//왼쪽은 키값 오른쪽은 벨류
            name: name
        };

        $.ajax({
            type: "POST",
            url: "/signFindId",
            data: params,
            success: function(result){
                let msg;
                if(result!=""){
                    msg = "Your ID : "+result;
                }else{
                    msg = "No information is being inquired."
                }
                alert(msg);
            },
            error: function(error){
                alert("API 에러가 발생했습니다.");
                console.log(error);
            }
        });
    },
    getId: function(id) {//컨트롤러 메소드 이름이랑 같다 ->오브젝트 형식
        let params = {
            id : id
        };

        $.ajax({
            type: "POST",
            url: "/idValidation",
            data: params,
            success: function(result){
                let msg;
                if(result == false){
                    msg = "This Id is possible.";
                }else if(result == true){
                    msg = "This Id is not available.";
                }
                alert(msg);
            },
            error: function(error){
                console.log(error)
                alert("API 에러가 발생했습니다.");
            }
        });
    },
    getEmail: function(email) {//컨트롤러 메소드 이름이랑 같다 ->오브젝트 형식
        let params = {
            email : email
        };

        $.ajax({
            type: "POST",
            url: "/emailValidation",
            data: params,
            success: function(result){
                let msg;
                if(result == false){
                    msg = "This Email is possible.";
                }else if(result == true){
                    msg = "This Email is not available.";
                }
                alert(msg);
            },
            error: function(error){
                alert("API 에러가 발생했습니다.");
                console.error(error);
            }
        });
    },

    getPassword: function(id, email, question, answer) {//컨트롤러 메소드 이름이랑 같다 ->오브젝트 형식
        let params = {
            id : id,
            email : email,
            question : question,
            answer : answer
        };

        $.ajax({
            type: "POST",
            url: "/signFindPassword",
            data: params,
            success: function(result){
                let msg;
                if(result === true){
                    msg = "A temporary password has been sent.";
                }else if(result === false){
                    msg = "The value entered is invalid.";
                }else{
                    msg = "The value entered is invalid.";
                }
                alert(msg);
            },
            error: function(error){
                alert("API 에러가 발생했습니다.");
                console.error(error);
            }
        });
    },

    compareCode: function(projectId) {
        let comparedCodeInfo;
        const params = {
            projectId : projectId
        };

        $.ajax({
            async: false,
            type: "POST",
            url: "/codeCompare",
            data: params,
            success: function(result){
                comparedCodeInfo = result;
            },
            error: function(error){
                alert("API 에러가 발생했습니다.");
                console.error(error);
            }
        });

        return comparedCodeInfo;
    }


}