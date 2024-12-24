import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";
import {
  exampleCertificates,
  examplePrograms,
  exampleProjects,
  exampleStudents,
  INITIAL_ABOUT,
} from "@/lib/data";
import { getNameById } from "@/lib/getNameById";

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 10,
    fontFamily: "Times-Roman",
    lineHeight: 1.4,
  },
  header: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  personal: {
    display: "flex",
    flexDirection: "row",
    gap: "4px",
    justifyContent: "center",
  },
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    borderBottom: "1px solid #000",
    paddingBottom: 4,
  },
  text: {
    marginBottom: 5,
  },

  projects: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },

  title: {
    fontSize: 14,
    marginBottom: 4,
  },
});

const Resume = () => {
  const student = exampleStudents[0];
  const projects = exampleProjects;
  const certificates = exampleCertificates;
  const program = examplePrograms[0];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>
            {student.student_name}
          </Text>
          <View>
            <View style={styles.personal}>
              <Text>{student.student_whatsappnum} |</Text>
              <Link href={"mailto:" + student.student_email}>
                {student.student_email}
              </Link>
              <Text>| {student.student_address}</Text>
            </View>
            <View style={styles.personal}>
              <Link href={"#"}>Linkedin</Link>
              <Text>|</Text>
              <Link href={"#"}>Github</Link>
            </View>
          </View>
        </View>

        {/* About Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <Text>{INITIAL_ABOUT}</Text>
        </View>

        {/* Projects Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projects</Text>
          <View style={{ marginHorizontal: 10 }}>
            <View style={styles.projects}>
              {projects.map((project) => (
                <View key={project.project_id}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text style={styles.title}>{project.project_name}</Text>
                    <Link href={project.project_url}>Project&apos;s link</Link>
                  </View>
                  <Text style={{ marginLeft: 5 }}>• {project.description}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Certificates Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Certificates</Text>
          <View style={{ marginHorizontal: 10 }}>
            {certificates.map((certificate) => {
              const certificateClass = getNameById(
                certificate.class_id,
                "Class"
              );

              return (
                <View key={certificate.certificate_id}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text style={styles.title}>
                      {certificateClass?.replace(/[^a-zA-Z0-9 ]/g, "")}
                    </Text>
                    <Link href={"#"}>Certificate Link</Link>
                  </View>
                  <Text style={{ marginLeft: 10 }}>
                    • Program Name: {program.program_name}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>

        {/* Credentials Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Credentials</Text>
        </View>
      </Page>
    </Document>
  );
};

export default Resume;
