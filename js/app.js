var app = new Vue({
  el: "#app",
  data: {
    id: 0,
    student: {
      //   id: null,
      stdid: null,
      fname: null,
      lname: null,
      eaddress: null,
      gpa: null,
    },
    clickvalue: {
      stdid: false,
      fname: false,
      lname: false,
      eaddress: false,
      gpa: false,
    },
    studentList: [
      {
        id: "1",
        fname: "Jack",
        lname: "Nicole",
        eaddress: "dhsfoa@jsjd.com",
        gpa: 3.0,
        stdid: "6304101304",
      },
      {
        id: "2",
        fname: "Back",
        lname: "Nicole",
        eaddress: "dhsfoa@jsjd.com",
        gpa: 3.0,
        stdid: "6304101304",
      },
      {
        id: "3",
        fname: "Gack",
        lname: "Nicole",
        eaddress: "dhsfoa@jsjd.com",
        gpa: 3.0,
        stdid: "6304101304",
      },
      {
        id: "4",
        fname: "Hack",
        lname: "Nicole",
        eaddress: "dhsfoa@jsjd.com",
        gpa: 3.0,
        stdid: "6304101304",
      },
      {
        id: "5",
        fname: "Rack",
        lname: "Nicole",
        eaddress: "dhsfoa@jsjd.com",
        gpa: 3.0,
        stdid: "6304101304",
      },
    ],
    gpanana: 2,
    x: [],
  },
  methods: {
    green(click, value) {
      if (click) {
        if (value) {
          return { border: "2px solid #dc3545" };
        } else {
          return { border: "2px solid green" };
        }
      } else {
        return "";
      }
    },
    checkvalueinput(x) {
      return x == "" || x == null;
    },
    checkvalue(email, id, gpa) {
      return (
        this.student.stdid == null ||
        this.student.fname == null ||
        this.student.lname == null ||
        this.student.gpa == null ||
        this.student.eaddress == null ||
        this.student.stdid == "" ||
        this.student.fname == "" ||
        this.student.lname == "" ||
        this.student.gpa == "" ||
        this.student.eaddress == "" ||
        !this.checkemail(email) ||
        !this.checklangeid(id) ||
        !this.checkvalueid(id) ||
        !this.checkvaluegpa(gpa)
      );
    },
    checkemail(email) {
      const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    checklangeid(id) {
      if (id != null) {
        if (id.length == 10) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },
    checkvalueid(id) {
      let x = true;
      if (id != null) {
        for (let i = 0; i < this.studentList.length; i++) {
          if (id == this.studentList[i].stdid) {
            x = false;
            return false;
          }
        }
        if (x) {
          return true;
        }
      } else {
        return true;
      }
    },
    checkvaluegpa(gpa) {
      if (gpa != null  && null != "") {
        if (gpa <= 4 && gpa >= 0) {
            return true;
          } else {
            return false;
          }
      } else {
          return false;
      }
    },
    addvalue(fname, lname, stuid, gpa, eaddress) {
      this.studentList.push({
        id: this.studentList.length + 1,
        fname: fname,
        lname: lname,
        eaddress: eaddress,
        gpa: gpa,
        stdid: stuid,
      });
      this.student = {
        stdid: "",
        fname: "",
        lname: "",
        eaddress: "",
        gpa: "",
      };
      this.clickvalue = {
        stdid: false,
        fname: false,
        lname: false,
        eaddress: false,
        gpa: false,
      };
    },
    delete1(index) {
      if (index == -1) {
        this.studentList.splice(0, this.studentList.length);
      } else {
        this.studentList.splice(index, 1);
        for (let i = 0; i < this.studentList.length; i++) {
          this.studentList[i].id = i + 1;
        }
      }
    },
  },
});
