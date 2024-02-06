$(document).ready(function(){
    console.log('page loaded')

    const template = document.createElement('template');
    const footer = document.createElement('template');

    template.innerHTML = `
    <nav class="navbar navbar-expand-lg sticky-top bg-light">
        <div class="container-fluid">
            <a href="index.html" class="navbar-brand mb-0 h1 theme-blue doctor-name">
                Lahari Vattikunta, D.D.S., M.S., Ph.D. <br>Ray A. Beddoe,
                D.M.D., Pharm.D., M.S.</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 auto-ml-0-mr">
                    <li class="nav-item">
                        <a class="nav-link" id="home" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a id="about" class="nav-link" href="about.html">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="newPatient" href="https://forms.mydentistlink.com/94226d70-956b-41b8-9bd6-1678f43fa464" rel="noopener noreferrer">
                        New Patients</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="services navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Services
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="services.html">Overview</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="oral_hygiene.html">Oral Hygiene</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="perio_disease.html">Periodontal Disease</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="perio_treatment.html">Periodontal Disease <br /> Treatment</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="bone_grafting.html">Bone Grafting</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="implant_dentistry.html">Implant Dentistry</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="tissue_grafting.html">Tissue Grafting</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="contact" href="contact.html">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>`;

    footer.innerHTML = `
    <div class="row footer">
      <div class="col-sm-12 col-md-8">
        <h4>Lahari Vattikunta, D.D.S., M.S., Ph.D.</h4>
        <p>765 N Aspen Ave <br /> Broken Arrow, OK 74012 <br /> U.S.</p>
      </div>
      <div class="col-sm-12 col-md-4" style="display: flex; flex-direction: column; align-items: flex-end;">
        <a href="tel:(918) 451-2717" class="phone-number" data-type="phone">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
          </svg>(918) 451-2717
        </a>
          <br/>
        <a href="mailto:lahariv@baperio.com" class="email" data-type="email">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
          </svg>lahariv@baperio.com
        </a>
      </div>
    </div>`


    // $("#"+e.target.id).addClass("active")

    document.body.prepend(template.content);
    document.body.append(footer.content);
    
    console.log($(document)[0].location.href.split('/').slice(-1)[0].split('.')[0])
    const currentPage = $(document)[0].location.href.split('/').slice(-1)[0].split('.')[0]

    if (currentPage == 'index') {
        $("#home").addClass("active");    
    } else {
        $("#"+currentPage).addClass("active");
    }

    // switch($(document)[0].location.href.split('/').slice(-1)[0]){
    //     case 'index.html':
    //         $("#home").addClass("active");
    //         break;
    //     case 'about.html':
    //         $("#about").addClass("active");
    //         break;
    //     case 'contact.html':
    //         $("#contact").addClass("active");
    //         break;
    //     default:
    //         console.log("here")
    //         $("#services").addClass("active");
    //         break;
    // }


    $("a#newPatient").click(function(e){ 
        e.preventDefault(); 
        var url = $(this).attr('href'); 
        // window.open(url, '_blank');
        window.open(url+"?dt="+(new Date()).getTime(),"_blank");
    });

    $("a").click(function(e) {
        if (e.target.id != "newPatient") {
            // $(".active").removeClass("active")
            e.preventDefault();
            var href = $(this).attr("href");
            setTimeout(function() {
                if (href) {
                    window.location = href;
                }
            }, 250)
        }
    })

})