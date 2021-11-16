import { styled } from '../lib/stitches'
import { useRouter } from 'next/router'
import { useSelect } from 'downshift'
import { useForm } from 'react-hook-form'
import * as Box from '../components/box'
import * as Combobox from '../components/combobox'
import Button from '../components/button'
import Input from '../components/input'
import Textarea from '../components/textarea'
import Label from '../components/label'

const Container = styled('div', {
  marginTop: 80,
  marginBottom: 100,
  padding: '0 1em',
})

const Title = styled('div', {
  fontWeight: 'bold',
  fontSize: '1.5rem',
  marginBottom: '1em',
})

const StyledBoxRoot = styled(Box.Root, {
  marginBottom: '2em',
})

const StyledInput = styled(Input, {
  width: '100%',
  marginBottom: '1em',
})

const StyledTextarea = styled(Textarea, {
  width: '100%',
  height: '130px',
})

const StyledLabel = styled(Label, {
  marginBottom: '0.2em',
})

const languages = [
  { iso: 'ko', name: '한국어' },
  { iso: 'en', name: 'English' },
  { iso: 'ja', name: '日本国' },
]

const LanguageBox = () => {
  const router = useRouter()

  const initialLanguageIndex = languages.findIndex(
    ({ iso }) => iso === router.locale
  )

  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    items: languages,
    initialSelectedItem: languages[initialLanguageIndex],
    initialHighlightedIndex: initialLanguageIndex,
    id: 'downshift-setting-id',
    toggleButtonId: 'downshift-setting-toggle-button-id',
  })

  const handleLanguageClick = () => {
    router.push('/setting', '/setting', { locale: selectedItem.iso })
  }

  return (
    <StyledBoxRoot>
      <Box.Content title="언어" subTitle="바꿀 언어를 선택하세요.">
        <Combobox.Root>
          <Combobox.Button {...getToggleButtonProps()}>
            {selectedItem.name}
          </Combobox.Button>
          <Combobox.List {...getMenuProps()}>
            {isOpen &&
              languages.map((item, index) => (
                <Combobox.Option
                  key={`${item.iso}${index}`}
                  activated={highlightedIndex === index}
                  {...getItemProps({ item, index })}
                >
                  {item.name}
                </Combobox.Option>
              ))}
          </Combobox.List>
        </Combobox.Root>
      </Box.Content>
      <Box.Bottom>
        <Box.BottomRight>
          <Button onClick={handleLanguageClick}>저장하기</Button>
        </Box.BottomRight>
      </Box.Bottom>
    </StyledBoxRoot>
  )
}

const FeedbackBox = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <StyledBoxRoot>
      <Box.Content
        title="피드백"
        subTitle="이 앱이 편리한가요? 저희에게 어떤지 알려주세요."
      >
        <form onClick={handleSubmit(onSubmit)}>
          <StyledLabel htmlFor="feedback-email">이메일</StyledLabel>
          <StyledInput
            type="email"
            id="feedback-email"
            {...register('email')}
          />
          <StyledLabel htmlFor="feedback-data">내용</StyledLabel>
          <StyledTextarea id="feedback-data" {...register('feedback')} />
        </form>
      </Box.Content>
      <Box.Bottom>
        <Box.BottomRight>
          <Button type="submit" onClick={handleSubmit(onSubmit)}>
            보내기
          </Button>
        </Box.BottomRight>
      </Box.Bottom>
    </StyledBoxRoot>
  )
}

const Setting = () => {
  return (
    <Container>
      <Title>설정</Title>
      <LanguageBox />
      <FeedbackBox />
    </Container>
  )
}

export default Setting