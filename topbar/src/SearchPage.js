/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react'
import styled from 'styled-components';
import { AiOutlineDown } from 'react-icons/ai'
import { VscEyeClosed } from 'react-icons/vsc'
import Theme from '../src/assets/images/theme1.png'
import SearchIcon from '../src/assets/images/search-icon.png';
import SearchModal from './DropDownModal';


const SearchPage = () => {
    const [search, setSearch] = useState('');
    const [showSearchModal, setShowSearchModal] = useState(false);

    const openModal = () => {
        setShowSearchModal(prev => !prev);
    };

    const ContSection = styled.div`
    display: flex;
    padding: ${({ top }) => top || '5px'} 
    background: white;
`;
    const ImageSection = styled.div`
   display: flex;
   margin-bottom: 4%;
`;

    const StyledSearchIcon = styled.img`
    position: absolute;
    margin-top:  20px;
    margin-left: 8%;
   
`;

    const Chip = styled.p`
    display: inline-block;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    padding: 6px 12px;
    border-radius: 7px;
    margin-right: 26px;
    margin-left: 6%;
    color: '#718596';
`;

    const TabletSection = styled.div`
    display: flex;
    padding: ${({ top }) => top || '24px'} 16px 16px;
    background: #DCDCDC;
`;

    const TabletChip = styled.p`
    display: inline-block;
    font-weight: 500;
    font-size: 12px;
    padding: 8px 12px;
    border-radius: 7px;
    margin-right: 26px;
    margin-left: 6%;
    background: white;
    color: '#718596';
    border:  '1px solid #E2E9F0';
`;


    const IconWrapper = styled.div`
       display: flex ;
          float: left;
`
    const Text3 = styled.div`
     margin-left: 10%;
     margin-top: 1%;
`
    const TextWrapper = styled.div`
        display: flex ;
          float: left;
         margin-left: 7%;
         margin-top: 2%;
         background: #DCDCDC;
`
    const Text = styled.span`
    font-size: 15px;
    margin-top: -4px;
     
`

    const Text2 = styled.span`
     font-size: 15px;
    margin-top: -4px;
`
    const CardWrapper = styled.div`
    padding: 30px 10px 80px 10px;
    transition: 0.3s;
    width: 90%;
    margin-top: 4%;
    margin-left: 5%;
    border-radius: 9px;
    background-color: white;
`
    const Card = styled.div`
    padding: 20px 16px;
    transition: 0.3s;
    width: 90%;
    margin-top: 4%;
    margin-left: 5%;
    border-radius: 9px;
    background-color: white;

`
    const Body = styled.div`
    background-color: #DCDCDC;
`
    const Result = styled.div`
background-color: white;
font-size: 15px;
margin-top: 20px;
margin-left: 7%;
width: 100%;

`
    const FirstSection = styled.div`
display: flex;
justify-content: space-between;
`
    const Border = styled.div`
   width: 100%;
   margin-bottom:  8px;
`


    const TopText = styled.p`
font-size: 15px;
margin-left: 4px;
`
    const Input = styled.input`
  margin-top: 20px;
  outline: transparent;
  margin-left: 10%;  
`

    const FeedBack = styled.div`
     margin-top: 5%;
    padding: 20px;
     margin-left: 3%;
`

    return (
        <div>
            <FirstSection>
                <StyledSearchIcon src={SearchIcon} alt="search" />
                <Input
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    type="text"
                    width={12}
                    error
                    placeholder="Search here"
                    border={"#99999933"}
                />
                <Border />
            </FirstSection>
            <Result>Search results for "mark"</Result>
            <hr></hr>
            <ContSection>
                <Chip>
                    <strong>Messages</strong> 89
                </Chip>
                <Chip>
                    <strong>People</strong> 194
                </Chip>
                <Chip>
                    <strong>File</strong> 10
                </Chip>
                <Chip>
                    <strong>Channel</strong> 20
                </Chip>
            </ContSection>
            <Body>
                <TabletSection>
                    <TabletChip>
                        <IconWrapper>
                            Company Goals  <AiOutlineDown />
                        </IconWrapper>
                    </TabletChip>
                    <TabletChip>
                        <IconWrapper>
                            Company Files  <AiOutlineDown />
                        </IconWrapper>
                    </TabletChip>
                    <TabletChip>
                        <IconWrapper>
                            Chess  <AiOutlineDown />
                        </IconWrapper>
                    </TabletChip>
                    <TabletChip>
                        <IconWrapper>
                            Music  <AiOutlineDown />
                        </IconWrapper>
                    </TabletChip>
                    <TabletChip>
                        <IconWrapper>
                            NoticeBoard  <AiOutlineDown />
                        </IconWrapper>
                    </TabletChip>
                    <TabletChip>
                        <IconWrapper>
                            DM  <AiOutlineDown />
                        </IconWrapper>
                    </TabletChip>
                    <TabletChip>
                        <IconWrapper >
                            Channels <AiOutlineDown />
                        </IconWrapper>
                    </TabletChip>
                </TabletSection>
                <TextWrapper>
                    <Text><strong>Sort:</strong> Most Relevant</Text>
                    <AiOutlineDown onClick={openModal} />
                </TextWrapper>
                <SearchModal
                    showSearchModal={showSearchModal}
                    setShowSearchModal={setShowSearchModal} />
                <TextWrapper>
                    <Text2><strong>Show:</strong> 20 Results PerPage</Text2>
                    <AiOutlineDown />
                </TextWrapper>
                <Card>< VscEyeClosed /> Some older messages may not be shown because your workspace has over 10,000 messages. Learn more</Card>

                <CardWrapper>
                    <strong>stage 9</strong> - Oct 11th
                    <br />
                    <IconWrapper>
                        <img src={Theme} alt='image' width='50' height='50' />
                        <TopText><strong>Poly4 9</strong>
                            <br />
                            Yeah check announcement
                        </TopText>
                    </IconWrapper>
                </CardWrapper>
                <Text3><strong>Related People</strong></Text3>
                <ImageSection>
                    <span style={{
                        marginLeft: '5%',
                        transition: '0.3s',
                        width: '40%',
                        marginTop: '2%',

                    }}>
                        <img src={Theme} alt="Avatar" width='50%' />
                        <div style={{
                            backgroundColor: 'white',
                            width: '50%',
                            borderRadius: '4px',
                        }}>
                            <Text3 >Mark CEO</Text3>
                            <Text3>Architect & Engineer</Text3>
                        </div>
                    </span>
                    <div style={{
                        transition: '0.3s',
                        width: '40%',
                        marginTop: '2%'
                    }}>
                        <img src={Theme} alt="Avatar" width='50%' />
                        <div style={{
                            backgroundColor: 'white',
                            width: '50%',
                            borderRadius: '4px',
                        }}>
                            <Text3>Mark John</Text3>
                            <Text3>Architect & Engineer </Text3>
                        </div>
                    </div>
                    <div style={{
                        transition: '0.3s',
                        width: '40%',
                        marginTop: '2%'
                    }}>
                        <img src={Theme} alt="Avatar" width='50%' />
                        <div style={{
                            backgroundColor: 'white',
                            width: '50%',
                            borderRadius: '4px',
                        }}>
                            <Text3>John Doe</Text3>
                            <Text3>Architect & Engineer </Text3>
                        </div>
                    </div>
                </ImageSection>
                <Text3><strong>Give Feedback</strong></Text3>
                <CardWrapper>
                    <strong>stage 9</strong> - Oct 11th
                    <br />
                    <IconWrapper>
                        <img src={Theme} alt='image' width='50' height='50' />
                        <TopText><strong>Poly4 9</strong>
                            <br />
                            Yeah check announcement
                        </TopText>
                    </IconWrapper>
                </CardWrapper>
                <FeedBack>Give Feedback</FeedBack>
            </Body>
        </div>

    )
}

export default SearchPage;