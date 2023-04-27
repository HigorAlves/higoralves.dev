import {
	Box,
	Button,
	Center,
	Container,
	Grid,
	Group,
	PasswordInput,
	rem,
	TextInput
} from '@mantine/core'
import { useForm } from '@mantine/form'

import { isEmailValid } from '~/utils/isEmailValid'
import { isPasswordStrong } from '~/utils/isPasswordStrong'

export default function AuthPage() {
	const form = useForm({
		initialValues: {
			email: '',
			password: ''
		},
		validate: {
			email: isEmailValid,
			password: isPasswordStrong
		}
	})

	function handleFormSubmit() {}

	return (
		<Container fluid>
			<Grid justify='center' align='center'>
				<Grid.Col xs={12} md={5} lg={4} xl={3}>
					<Center h={'89vh'} maw={300} mx={'auto'}>
						<form
							onSubmit={form.onSubmit(handleFormSubmit)}
							style={{ minWidth: '100%' }}
						>
							<TextInput
								withAsterisk
								label='Email'
								placeholder='your@email.com'
								{...form.getInputProps('email')}
							/>

							<PasswordInput
								mt={rem(20)}
								withAsterisk
								label='Password'
								placeholder='your@email.com'
								{...form.getInputProps('password')}
							/>

							<Group position='right' mt='md'>
								<Button type='submit' fullWidth>
									Submit
								</Button>
							</Group>
						</form>
					</Center>
				</Grid.Col>
				<Grid.Col xs={12} md={8} lg={8} xl={9}>
					asd
				</Grid.Col>
			</Grid>
		</Container>
	)
}
