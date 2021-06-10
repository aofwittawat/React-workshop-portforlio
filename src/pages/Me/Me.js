import React from 'react'
import Layout from '../../components/Layout'
import { SectionTitle, Paragraph, Pill } from '../../styles';

const Me = ({ user }) => {
    return (
        <Layout user={user}>
              <SectionTitle>About Me</SectionTitle>
              <Paragraph>{user.basics.summary}</Paragraph>
        </Layout>
    )
}

export default Me
