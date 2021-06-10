import React from 'react'
import Layout from '../../components/Layout'
import {Container,JobTitle,WorkItem,WorkTitle} from './styles';
import {SectionTitle,Paragraph} from '../../styles'

const Work = ({user}) => {
    return (
        <Layout user={user}>
            <Container>
                <SectionTitle>Work</SectionTitle>
                <ul>
                    {user.work.map((work,i)=>(
                        <WorkItem key={i}>
                            <WorkTitle>{work.position}</WorkTitle>
                                <div>
                                <JobTitle>{work.company}</JobTitle>
                                <br />
                                <span>{work.start.year} to {work.end.year}</span>
                            </div>
                        <Paragraph>{work.summary}</Paragraph>
                        </WorkItem>
                    ))}
                </ul>
            </Container>
        </Layout>
    )
}

export default Work
