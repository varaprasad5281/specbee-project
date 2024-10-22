const speakerCards = document.querySelectorAll(".speaker-slider__card");
const popover = document.getElementById("speaker-popover");
const closeBtn = document.getElementById("popover-close");

const popoverImage = document.getElementById("popover-image");
const popoverName = document.getElementById("popover-name");
const popoverRole = document.getElementById("popover-role");
const popoverCompany = document.getElementById("popover-company");
const popoverDetails = document.getElementById("popover-details");

// Speaker data for 4 speakers
const speakers = {
  1: {
    name: "John Doe",
    role: "Chief Marketing Officer",
    company: "Acme Corp",
    image:
      "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum situnde nihil dolorum nisi facilis vel vero dolor, laborum, suntdebitis similique sint",
  },
  2: {
    name: "Jane Smith",
    role: "VP of Product",
    company: "Tech Innovations",
    image:
      "https://media.istockphoto.com/id/673413724/photo/business-life.webp?a=1&b=1&s=612x612&w=0&k=20&c=WX_8LiXhhOZT-sCWE0MEbqxu6GNuBT2cGxHrwiAyAkM=",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum situnde nihil dolorum nisi facilis vel vero dolor, laborum, suntdebitis similique sint",
  },
  3: {
    name: "Alex Brown",
    role: "Lead Engineer",
    company: "BuildNow",
    image:
      "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum situnde nihil dolorum nisi facilis vel vero dolor, laborum, suntdebitis similique sint",
  },
  4: {
    name: "Emily Davis",
    role: "CEO & Founder",
    company: "FutureWorks",
    image:
      "https://plus.unsplash.com/premium_photo-1669688174637-92ff26cc0a9b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA==",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum situnde nihil dolorum nisi facilis vel vero dolor, laborum, suntdebitis similique sint",
  },
};

// Open popover with speaker details
speakerCards.forEach((card) => {
  card.addEventListener("click", function () {
    const speakerId = this.getAttribute("data-speaker");
    const speaker = speakers[speakerId];

    popoverImage.src = speaker.image;
    popoverName.textContent = speaker.name;
    popoverRole.textContent = speaker.role;
    popoverCompany.textContent = speaker.company;
    popoverDetails.textContent = speaker.details;

    popover.style.display = "block";
  });
});

// Close popover
closeBtn.addEventListener("click", function () {
  popover.style.display = "none";
});
