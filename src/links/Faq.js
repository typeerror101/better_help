import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import "../styles/faq.css";

export default function StaticFaqSection() {
  return (
    <MDBContainer>
      <section>
        <MDBTypography
          tag="h3"
          className=" text-center mb-4 pb-2 text-emerald-950 fw-bold"
        >
          FAQ
        </MDBTypography>
        <p className="para1 text-6xl text-center mb-5">
          Find the answers for the most frequently asked questions below
        </p>

        <MDBRow>
          <MDBCol md="6" lg="4" className=" mb-4">
            <MDBTypography tag="h6" className="mb-3 text-4xl text-emerald-950">
              How is depression diagnosed?
            </MDBTypography>
            <p className="para1">
              <strong>{/* <u>Absolutely!</u> */}</strong> Depression (also
              called major depressive disorder) presents with symptoms that
              range from mild to severe. Feelings of sadness, difficulty
              sleeping or sleeping too much, feeling worthless or guilty, loss
              of energy or increased fatigue, and a loss of interest or pleasure
              in activities once enjoyed are common. Children and adolescents
              who are depressed may come across as irritable rather than sad.
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-4xl text-emerald-950">
              Who can diagnose depression?
            </MDBTypography>
            <p className="para1">
              <strong>{/* <u>Yes, it is possible!</u> */}</strong> Primary care
              providers often diagnose depression. They may refer an individual
              to a mental health professional such as a psychiatrist or
              psychologist for treatment. Typically, says Steven Hollon, PhD, of
              Brentwood, Tennessee, a professor of psychology at Vanderbilt
              University, the provider uses the Diagnostic and Statistical
              Manual of Mental Disorders (DSM) to make a diagnosis.3 “They go
              through the criteria in the DSM to see how many criteria the
              person meets,” Hollon says.
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-4xl text-emerald-950">
              How long does it take to diagnose depression?
            </MDBTypography>
            <p className="para1">
              It can take weeks after depression begins before it is diagnosed.
              This is partly because people may be resistant to ask for help,
              says Rudy Nydegger, PhD, professor emeritus of psychology and
              management at Union College and chief in the Division of
              Psychology at Ellis Hospital, both in Schenectady, New York.
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-4xl text-emerald-950">
              Is it possible to try to diagnose yourself with depression?
            </MDBTypography>
            <p className="para1">
              “Self-diagnosis is not helpful,” says Rudy Nydegger, PhD,
              professor emeritus of psychology and management at Union College
              and chief in the Division of Psychology at Ellis Hospital, both in
              Schenectady, New York. “Instead of going online and researching
              the University of Google, ask your doctor.”
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-4xl text-emerald-950">
              Can you inherit depression?
            </MDBTypography>
            <p className="para1">
              <strong>{/* <u>Unfortunately no</u>. */}</strong> Genetic factors
              do play a role in depression, but so do biological, environmental,
              and psychological factors.2 Unipolar depression (depression only)
              is less likely to be inherited than Bipolar disorder (which is
              marked by one or more manic or hypomanic episodes in addition to
              depression), says Steven Hollon, PhD, of Brentwood, Tennessee, a
              professor of psychology at Vanderbilt University.
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-4xl text-emerald-950">
              What is the #1 cause of depression?
            </MDBTypography>
            <p className="para1">
              “The number one cause of depression is the tough stuff, the major
              life events that go wrong,” says Steven Hollon, PhD, of Brentwood,
              Tennessee, a professor of psychology at Vanderbilt University.
              Depression can occur when people experience adverse life events
              such as the death of someone close, the loss of a job, or some
              type of psychological trauma. It can even stem from a longing for
              "the way things were." Depression can lead to more stress and
              dysfunction, which can worsen the depression itself.
            </p>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
  );
}
