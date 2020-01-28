$(document).ready(function() {


  change_event_members("event-memb");
  setInterval(function() {
    change_event_members("event-memb");
  },8000);

  change_spons_members("spons-memb");
  setInterval(function() {
    change_spons_members("spons-memb");
  },8000);

  // change_conv_members("conv-memb");
  // setInterval(function() {
  //   change_conv_members("conv-memb");
  // },4000);

  change_finance_members("finan-memb");
  setInterval(function() {
    change_finance_members("finan-memb");
  },4000);

  change_tech_members("tech-memb");
  setInterval(function() {
    change_tech_members("tech-memb");
  },4000);

  change_vol_members("vol-memb");
  setInterval(function() {
    change_vol_members("vol-memb");
  },6000);

  change_design_members("design-memb");
  setInterval(function() {
    change_design_members("design-memb");
  },4000);

  change_photo_members("photo-memb");
  setInterval(function() {
    change_photo_members("photo-memb");
  },6000);

  change_deleg_members("deleg-memb");
  setInterval(function() {
    change_deleg_members("deleg-memb");
  },4000);

  function convert_url(elem, photo_num, photo_exten) {
    url = elem.find("img").attr("src").split("-")[0];
    url = url + "-" + photo_num + "." + photo_exten;

    return url;
  }
  function member_clone(member_class, member_name,  photo_num, phone) {
    let event_memb = $(`.${member_class}`);
    var clone = event_memb.clone();
    var url = convert_url(clone, photo_num, "jpeg");
    clone.find("a").text(phone);
    clone.find(".member__name").text(member_name);
    clone.find("img").attr("src", url);

    return clone;
  }

  function change_event_members(class_name) {
    setTimeout(function() {
      let event_memb = $(`.${class_name}`);
      let event_sub = member_clone("event-memb", "Anand Raj", "1", "+918709693879");
      event_memb.replaceWith(event_sub);
    }, 2000);

    setTimeout(function() {
      let event_memb = $(`.${class_name}`);
      let event_sub = member_clone("event-memb", "Abhishek Gorai", "2", "+918637531030");
      event_memb.replaceWith(event_sub);
    }, 4000);

    setTimeout(function() {
      let event_memb = $(`.${class_name}`);
      let event_sub = member_clone("event-memb", "Bhukya Noveen Baba", "3", "+9340137741");
      event_memb.replaceWith(event_sub);
    }, 6000);

    setTimeout(function() {
      let event_memb = $(`.${class_name}`);
      let event_sub = member_clone("event-memb", "Prashant Kumar", "4", "+918584964149");
      event_memb.replaceWith(event_sub);
    }, 8000);
  }
  function change_spons_members(class_name) {
    setTimeout(function() {
      let spons_memb = $(`.${class_name}`);
      let spons_sub = member_clone("spons-memb", "Bikash Jena", "1", "+918327750692");
      spons_memb.replaceWith(spons_sub);
    }, 2000);

    setTimeout(function() {
      let spons_memb = $(`.${class_name}`);
      let spons_sub = member_clone("spons-memb", "Satyam Raj", "2", "+917257855451");
      spons_memb.replaceWith(spons_sub);
    }, 4000);

    setTimeout(function() {
      let spons_memb = $(`.${class_name}`);
      let spons_sub = member_clone("spons-memb", "Anwesa Acharya", "3", "+917001729668");
      spons_memb.replaceWith(spons_sub);
    }, 6000);

    setTimeout(function() {
      let spons_memb = $(`.${class_name}`);
      let spons_sub = member_clone("spons-memb", "Sayan Dutta", "4", "+919434148922");
      spons_memb.replaceWith(spons_sub);
    }, 8000);
  }
  function change_finance_members(class_name) {
    setTimeout(function() {
      let finan_memb = $(`.${class_name}`);
      let finan_sub = member_clone(class_name, "Sourav Chal", "1", "+918240816435");
      finan_memb.replaceWith(finan_sub);
    }, 2000);

    setTimeout(function() {
      let finan_memb = $(`.${class_name}`);
      let finan_sub = member_clone(class_name, "Rupesh Kumar", "2", "+918825245193");
      finan_memb.replaceWith(finan_sub);
    }, 4000);
  }
  // function change_conv_members(class_name) {
  //   setTimeout(function() {
  //     let conv_memb = $(`.${class_name}`);
  //     let conv_sub = member_clone(class_name, "Rahul Kumar Ojha", "1", "+919110018090");
  //     conv_memb.replaceWith(conv_sub);
  //   }, 2000);
  //
  //   setTimeout(function() {
  //     let conv_memb = $(`.${class_name}`);
  //     let conv_sub = member_clone(class_name, "Sumit Kumar Singh", "2", "+918013946685");
  //     conv_memb.replaceWith(conv_sub);
  //   }, 4000);
  // }
  function change_tech_members(class_name) {
    setTimeout(function() {
      let tech_memb = $(`.${class_name}`);
      let tech_sub = member_clone(class_name, "Agnij Mallick", "1", "+918017756387");
      tech_memb.replaceWith(tech_sub);
    }, 2000);

    setTimeout(function() {
      let tech_memb = $(`.${class_name}`);
      let tech_sub = member_clone(class_name, "Debjit Mondal", "2", "+919832124814");
      tech_memb.replaceWith(tech_sub);
    }, 4000);
  }
  function change_vol_members(class_name) {
    setTimeout(function() {
      let vol_memb = $(`.${class_name}`);
      let vol_sub = member_clone(class_name, "Pranav Gupta", "1", "+919340137741");
      vol_memb.replaceWith(vol_sub);
    }, 2000);

    setTimeout(function() {
      let vol_memb = $(`.${class_name}`);
      let vol_sub = member_clone(class_name, "Aniket Prabhakar", "2", "+917250727858");
      vol_memb.replaceWith(vol_sub);
    }, 4000);
    setTimeout(function() {
      let vol_memb = $(`.${class_name}`);
      let vol_sub = member_clone(class_name, "Rahul Chandra Duari", "3", "+918001379425");
      vol_memb.replaceWith(vol_sub);
    }, 6000);
  }
  function change_design_members(class_name) {
    setTimeout(function() {
      let design_memb = $(`.${class_name}`);
      let design_sub = member_clone(class_name, "Aniket Haste", "1", "+918208615649");
      design_memb.replaceWith(design_sub);
    }, 2000);

    setTimeout(function() {
      let design_memb = $(`.${class_name}`);
      let design_sub = member_clone(class_name, "Arunava Mondal", "2", "+917797219369");
      design_memb.replaceWith(design_sub);
    }, 4000);
  }
  function change_photo_members(class_name) {
    setTimeout(function() {
      let photo_memb = $(`.${class_name}`);
      let photo_sub = member_clone(class_name, "Subhrajyoti Mahata", "1", "+919340137741");
      photo_memb.replaceWith(photo_sub);
    }, 2000);

    setTimeout(function() {
      let photo_memb = $(`.${class_name}`);
      let photo_sub = member_clone(class_name, "Priyam Dutta", "2", "+918481952090");
      photo_memb.replaceWith(photo_sub);
    }, 4000);

    setTimeout(function() {
      let photo_memb = $(`.${class_name}`);
      let photo_sub = member_clone(class_name, "Md Tazbiul Islam Nishat", "3", "+8801521302006");
      photo_memb.replaceWith(photo_sub);
    }, 6000);
  }
  function change_deleg_members(class_name) {
    setTimeout(function() {
      let deleg_memb = $(`.${class_name}`);
      let deleg_sub = member_clone(class_name, "Vansaj Raj", "1", "+919304119459");
      deleg_memb.replaceWith(deleg_sub);
    }, 2000);

    setTimeout(function() {
      let deleg_memb = $(`.${class_name}`);
      let deleg_sub = member_clone(class_name, "Saurav Jana", "2", "+918918258046");
      deleg_memb.replaceWith(deleg_sub);
    }, 4000);
  }
});
