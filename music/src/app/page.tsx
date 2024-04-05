import FeaturedCourses from "@/components/FeaturedCourses"
import Footer from "@/components/Footer"
import Herosection from "@/components/Herosection"
import MeetOurInstructor from "@/components/MeetOurInstructor"
import MusicSchoolTestimonials from "@/components/Testimonials"
import UpcomingWebinars from "@/components/UpcomingWebinars"
import WhyChooseUs from "@/components/WhyChooseUs"


 const home=()=>{
  return (
    <>
    <main>
      
     <Herosection/>
     <FeaturedCourses/>
     <WhyChooseUs/>
     <MusicSchoolTestimonials/>
     <UpcomingWebinars/>
     <MeetOurInstructor/>
     <Footer/>
     
      </main>
    </>
  )
}

export default home





