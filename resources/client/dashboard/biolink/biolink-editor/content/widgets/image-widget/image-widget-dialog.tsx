import {FormTextField} from '@common/ui/forms/input-field/text-field/text-field';
import {Trans} from '@common/i18n/trans';
import {BiolinkWidget} from '@app/dashboard/biolink/biolink';
import {FormImageSelector} from '@common/ui/images/image-selector';
import {FileUploadProvider} from '@common/uploads/uploader/file-upload-provider';
import {useTrans} from '@common/i18n/use-trans';
import {message} from '@common/i18n/message';
import {FormSelect} from '@common/ui/forms/select/select';
import {Item} from '@common/ui/forms/listbox/item';
import {CrupdateWidgetDialog} from '@app/dashboard/biolink/biolink-editor/content/widgets/crupdate-widget-dialog';
import {WidgetType} from '@app/dashboard/biolink/biolink-editor/content/widgets/widget-list';
import {WidgetDialogProps} from '@app/dashboard/biolink/biolink-editor/content/widgets/types/widget-dialog-props';
import {useFormContext} from 'react-hook-form';

export interface ImageWidget extends BiolinkWidget {
  type: WidgetType.Image;
  config: {
    url: string;
    destinationUrl?: string;
    type: 'default' | 'avatar';
    avatarShape?: 'circle' | 'square';
    widthPercent?: string;
  };
}

export function ImageWidgetDialog({
  biolink,
  widget,
}: WidgetDialogProps<ImageWidget>) {
  const {trans} = useTrans();
  return (
    <CrupdateWidgetDialog
      biolink={biolink}
      type={WidgetType.Image}
      widget={widget}
    >
      <FileUploadProvider>
        <FormImageSelector name="url" diskPrefix="widgets" required />
      </FileUploadProvider>
      <FormSelect
        className="my-24"
        name="type"
        label={<Trans message="Style" />}
        selectionMode="single"
      >
        <Item value="default">
          <Trans message="Default" />
        </Item>
        <Item value="avatar">
          <Trans message="Avatar" />
        </Item>
      </FormSelect>
      <ImageWidgetStyleFields />
      <FormTextField
        placeholder={trans(message('Optional'))}
        name="destinationUrl"
        type="url"
        label={<Trans message="Destination url" />}
        description={
          <Trans message="Redirect user to this url when clicking the image." />
        }
      />
    </CrupdateWidgetDialog>
  );
}

function ImageWidgetStyleFields() {
  const styleType = useFormContext<ImageWidget['config']>().watch('type');

  if (styleType === 'avatar') {
    return (
      <FormSelect
        className="mb-24"
        name="avatarShape"
        label={<Trans message="Shape" />}
        selectionMode="single"
      >
        <Item value="circle">
          <Trans message="Circle" />
        </Item>
        <Item value="square">
          <Trans message="Square" />
        </Item>
      </FormSelect>
    );
  }

  if (styleType === 'default') {
    return (
      <FormTextField
        className="mb-24"
        type="number"
        name="widthPercent"
        min={1}
        max={100}
        label={<Trans message="Width (%)" />}
        description={
          <Trans message="Image width as a percentage of the page width." />
        }
      />
    );
  }

  return null;
}
