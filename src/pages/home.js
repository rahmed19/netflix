import React from 'react'
import { OptForm, Feature } from '../components/'
import { HeaderContainer } from '../containers/header'
import { FaqsContainer } from '../containers/faqs'
import { FooterContainer } from '../containers/footer'
import { JumbotronContainer } from '../containers/jumbotron'


export default function Home(){
    return(
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
                    <Feature.SubTitle>Watch anaywhere. Cancel any time.</Feature.SubTitle>
                    <OptForm>
                        <OptForm.Input placeholder="Emails Address" />
                        <OptForm.Button>Try it now</OptForm.Button>
                        <OptForm.Break />
                        <OptForm.Text>
                            Ready to watch? 
                            Enter your email to create or restart your membership.
                        </OptForm.Text>
                </OptForm>
                </Feature>

            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
            
            
        </>

    )
}